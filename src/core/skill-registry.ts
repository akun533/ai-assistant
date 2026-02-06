/**
 * Skill Registry - Skill 注册表
 * 
 * 管理所有 Skills 的注册、加载和查询
 */

import fs from 'fs/promises';
import path from 'path';
import type { ToolHandler, ToolDefinition, ToolRegistration, ToolContext } from '../types/index.js';

export interface SkillDefinition {
  name: string;
  description: string;
  version: string;
  handlers: Map<string, ToolHandler>;
  metadata?: Record<string, any>;
}

export interface SkillToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
  };
  title?: string;
  private?: boolean;
}

export class SkillRegistry {
  private skills: Map<string, SkillDefinition> = new Map();
  private tools: Map<string, ToolRegistration> = new Map();
  
  // 存储每个UI框架的自定义工具（用于框架特定的工具）
  private frameworkTools: Map<string, Map<string, ToolRegistration>> = new Map();

  /**
   * 从 skills 目录加载所有 skills
   */
  async loadFromSkillsDir(skillsDir: string): Promise<void> {
    try {
      const entries = await fs.readdir(skillsDir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.isDirectory()) {
          const skillDir = path.join(skillsDir, entry.name);
          await this.loadSkill(skillDir, entry.name);
        }
      }
      
      console.log(`✅ 已加载 ${this.skills.size} 个 Skills`);
    } catch (error) {
      console.error('❌ 加载 Skills 失败:', error);
      throw error;
    }
  }

  /**
   * 加载单个 Skill
   */
  private async loadSkill(skillDir: string, skillName: string): Promise<void> {
    try {
      // 加载 handler.ts
      const handlerPath = path.join(skillDir, 'handler.ts');
      const handlerExists = await this.fileExists(handlerPath);
      
      if (!handlerExists) {
        console.warn(`⚠️ Skill ${skillName} 缺少 handler.ts 文件`);
        return;
      }

      // 动态导入 handler
      const handlerModule = await import(handlerPath);
      
      // 检查是否有默认导出或命名导出
      const handlers = handlerModule.default || handlerModule;
      
      if (!handlers || typeof handlers !== 'object') {
        console.warn(`⚠️ Skill ${skillName} 没有有效的 handler 导出`);
        return;
      }

      // 提取 handlers
      const handlersMap = new Map<string, ToolHandler>();
      const handlerNames = Object.keys(handlers);
      
      for (const handlerName of handlerNames) {
        if (typeof handlers[handlerName] === 'function') {
          handlersMap.set(handlerName, handlers[handlerName]);
        }
      }

      // 从 SKILL.md 读取 metadata（可选）
      let metadata: Record<string, any> = {};
      const skillMdPath = path.join(skillDir, 'SKILL.md');
      const skillMdExists = await this.fileExists(skillMdPath);
      
      if (skillMdExists) {
        try {
          const content = await fs.readFile(skillMdPath, 'utf-8');
          metadata = this.parseSkillMd(content);
        } catch (e) {
          console.warn(`⚠️ 无法读取 SKILL.md: ${skillMdPath}`);
        }
      }

      const skillDef: SkillDefinition = {
        name: skillName,
        description: metadata.description || `${skillName} skill`,
        version: metadata.version || '1.0.0',
        handlers: handlersMap,
        metadata,
      };

      this.skills.set(skillName, skillDef);

      // 自动注册所有 handler 为工具
      for (const [handlerName, handler] of handlersMap) {
        const toolName = `${skillName}_${handlerName}`;
        const toolDef: ToolRegistration = {
          definition: {
            name: toolName,
            description: metadata.description || `Handle ${handlerName} for ${skillName}`,
            inputSchema: {
              type: 'object',
              properties: {},
              required: [],
            },
          },
          handler: handler as ToolHandler,
        };
        this.tools.set(toolName, toolDef);
      }

      console.log(`✅ 已加载 Skill: ${skillName} (${handlersMap.size} handlers)`);
    } catch (error) {
      console.error(`❌ 加载 Skill ${skillName} 失败:`, error);
      throw error;
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
   * 检查文件是否存在
   */
  private async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 获取所有已注册的 Skills
   */
  getAllSkills(): SkillDefinition[] {
    return Array.from(this.skills.values());
  }

  /**
   * 获取单个 Skill
   */
  getSkill(name: string): SkillDefinition | undefined {
    return this.skills.get(name);
  }

  /**
   * 获取所有已注册的 Tools
   */
  getAllTools(): ToolRegistration[] {
    return Array.from(this.tools.values());
  }

  /**
   * 获取所有工具定义（简化版）
   */
  getAllToolDefinitions(): ToolDefinition[] {
    return Array.from(this.tools.values()).map(reg => reg.definition);
  }

  /**
   * 获取工具处理器
   */
  getHandler(name: string): ToolHandler | undefined {
    return this.tools.get(name)?.handler;
  }

  /**
   * 获取工具定义
   */
  getToolDefinition(name: string): ToolDefinition | undefined {
    return this.tools.get(name)?.definition;
  }

  /**
   * 注册工具（兼容旧接口）
   */
  registerTool(registration: ToolRegistration): void {
    this.tools.set(registration.definition.name, registration);
  }

  /**
   * 批量注册工具
   */
  registerTools(registrations: ToolRegistration[]): void {
    registrations.forEach(reg => this.registerTool(reg));
  }

  /**
   * 为特定UI框架注册自定义工具
   */
  registerFrameworkTools(uiFramework: string, registrations: ToolRegistration[]): void {
    if (!this.frameworkTools.has(uiFramework)) {
      this.frameworkTools.set(uiFramework, new Map());
    }
    const frameworkToolsMap = this.frameworkTools.get(uiFramework)!;
    registrations.forEach((registration) => {
      frameworkToolsMap.set(registration.definition.name, registration);
    });
  }

  /**
   * 获取工具处理器（支持框架特定）
   */
  getToolHandler(name: string, uiFramework?: string): ToolHandler | undefined {
    // 如果指定了UI框架，先查找该框架的自定义工具
    if (uiFramework) {
      const frameworkToolsMap = this.frameworkTools.get(uiFramework);
      if (frameworkToolsMap?.has(name)) {
        return frameworkToolsMap.get(name)?.handler;
      }
    }
    // 如果没有自定义工具，使用公共工具
    return this.tools.get(name)?.handler;
  }

  /**
   * 获取所有工具定义（支持框架特定）
   */
  getAllToolDefinitionsWithFramework(uiFramework?: string): ToolDefinition[] {
    const toolsMap = new Map<string, ToolDefinition>();
    
    // 先添加公共工具
    Array.from(this.tools.values()).forEach(reg => {
      toolsMap.set(reg.definition.name, reg.definition);
    });
    
    // 如果指定了UI框架，用该框架的自定义工具覆盖同名公共工具
    if (uiFramework) {
      const frameworkToolsMap = this.frameworkTools.get(uiFramework);
      if (frameworkToolsMap) {
        Array.from(frameworkToolsMap.values()).forEach(reg => {
          toolsMap.set(reg.definition.name, reg.definition);
        });
      }
    }
    
    return Array.from(toolsMap.values());
  }
}

// 单例实例
export const skillRegistry = new SkillRegistry();
