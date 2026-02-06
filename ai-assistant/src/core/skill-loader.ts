/**
 * Skill Loader - Skill 加载器
 * 
 * 异步加载和管理 Skills
 */

import fs from 'fs/promises';
import path from 'path';
import type { ToolHandler } from '../types/index.js';

export interface SkillConfig {
  name: string;
  description: string;
  version: string;
  handlers: Record<string, ToolHandler>;
  metadata?: Record<string, any>;
}

export interface LoadResult {
  success: boolean;
  skillName: string;
  handlerCount: number;
  error?: string;
}

export class SkillLoader {
  private loadedSkills: Map<string, SkillConfig> = new Map();

  /**
   * 异步加载指定目录下的所有 Skills
   */
  async loadSkills(skillsDir: string): Promise<Map<string, SkillConfig>> {
    const skills = new Map<string, SkillConfig>();

    try {
      const entries = await fs.readdir(skillsDir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.isDirectory()) {
          const skillDir = path.join(skillsDir, entry.name);
          const skillConfig = await this.loadSkill(skillDir, entry.name);
          
          if (skillConfig) {
            skills.set(entry.name, skillConfig);
            this.loadedSkills.set(entry.name, skillConfig);
          }
        }
      }
      
      console.log(`✅ SkillLoader: 已加载 ${skills.size} 个 Skills`);
      return skills;
    } catch (error) {
      console.error('❌ SkillLoader: 加载 Skills 失败:', error);
      throw error;
    }
  }

  /**
   * 异步加载单个 Skill
   */
  async loadSkill(skillDir: string, skillName: string): Promise<SkillConfig | null> {
    try {
      // 加载 handler.ts
      const handlerPath = path.join(skillDir, 'handler.ts');
      
      try {
        await fs.access(handlerPath);
      } catch {
        console.warn(`⚠️ Skill ${skillName} 缺少 handler.ts 文件`);
        return null;
      }

      // 动态导入 handler
      const handlerModule = await import(handlerPath);
      const handlers = handlerModule.default || handlerModule;
      
      if (!handlers || typeof handlers !== 'object') {
        console.warn(`⚠️ Skill ${skillName} 没有有效的 handler 导出`);
        return null;
      }

      // 提取 handlers
      const handlersRecord: Record<string, ToolHandler> = {};
      const handlerNames = Object.keys(handlers);
      
      for (const handlerName of handlerNames) {
        if (typeof handlers[handlerName] === 'function') {
          handlersRecord[handlerName] = handlers[handlerName];
        }
      }

      if (Object.keys(handlersRecord).length === 0) {
        console.warn(`⚠️ Skill ${skillName} 没有找到有效的 handler 函数`);
        return null;
      }

      // 从 SKILL.md 读取 metadata（可选）
      let metadata: Record<string, any> = {};
      const skillMdPath = path.join(skillDir, 'SKILL.md');
      
      try {
        await fs.access(skillMdPath);
        const content = await fs.readFile(skillMdPath, 'utf-8');
        metadata = this.parseSkillMd(content);
      } catch {
        // SKILL.md 是可选的
      }

      const skillConfig: SkillConfig = {
        name: skillName,
        description: metadata.description || `${skillName} skill`,
        version: metadata.version || '1.0.0',
        handlers: handlersRecord,
        metadata,
      };

      console.log(`✅ SkillLoader: 已加载 ${skillName} (${Object.keys(handlersRecord).length} handlers)`);
      return skillConfig;
    } catch (error) {
      console.error(`❌ SkillLoader: 加载 Skill ${skillName} 失败:`, error);
      return null;
    }
  }

  /**
   * 解析 SKILL.md 文件提取 metadata
   */
  private parseSkillMd(content: string): Record<string, any> {
    const metadata: Record<string, any> = {};
    
    // 解析 YAML front matter
    const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontMatterMatch) {
      const yamlContent = frontMatterMatch[1];
      const lines = yamlContent.split('\n');
      
      for (const line of lines) {
        const keyValueMatch = line.match(/^(\w+):\s*(.*)$/);
        if (keyValueMatch) {
          const [, key, value] = keyValueMatch;
          metadata[key] = value.trim();
        }
      }
    }
    
    return metadata;
  }

  /**
   * 获取所有已加载的 Skills
   */
  getLoadedSkills(): Map<string, SkillConfig> {
    return new Map(this.loadedSkills);
  }

  /**
   * 获取单个已加载的 Skill
   */
  getSkill(name: string): SkillConfig | undefined {
    return this.loadedSkills.get(name);
  }

  /**
   * 重新加载指定 Skill
   */
  async reloadSkill(skillsDir: string, skillName: string): Promise<SkillConfig | null> {
    const skillDir = path.join(skillsDir, skillName);
    const skillConfig = await this.loadSkill(skillDir, skillName);
    
    if (skillConfig) {
      this.loadedSkills.set(skillName, skillConfig);
    }
    
    return skillConfig;
  }

  /**
   * 卸载指定 Skill
   */
  unloadSkill(skillName: string): boolean {
    return this.loadedSkills.delete(skillName);
  }
}

// 单例实例
export const skillLoader = new SkillLoader();
