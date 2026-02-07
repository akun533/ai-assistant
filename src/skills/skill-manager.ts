/**
 * Skill 管理器
 * 支持 JS 脚本和 Shell 脚本
 */

import { exec, execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

interface SkillInfo {
  name: string;
  description: string;
  scripts: {
    js?: string;
    shell?: string;
  };
  installed: boolean;
}

interface SkillResult {
  success: boolean;
  output: string;
  error?: string;
}

export class SkillManager {
  private skillsDir: string;
  private skills: Map<string, SkillInfo> = new Map();

  constructor(skillsDir: string = './src/skills') {
    this.skillsDir = skillsDir;
  }

  /**
   * 扫描并加载所有 skill
   */
  async loadSkills(): Promise<void> {
    if (!fs.existsSync(this.skillsDir)) {
      console.log(`📁 Skills 目录不存在: ${this.skillsDir}`);
      return;
    }

    const entries = fs.readdirSync(this.skillsDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        await this.loadSkill(entry.name);
      }
    }

    console.log(`✅ 已加载 ${this.skills.size} 个 skills`);
  }

  /**
   * 加载单个 skill
   */
  private async loadSkill(skillName: string): Promise<void> {
    const skillPath = path.join(this.skillsDir, skillName);
    const skillInfoPath = path.join(skillPath, 'SKILL.md');

    if (!fs.existsSync(skillInfoPath)) {
      console.log(`⚠️ Skill ${skillName} 缺少 SKILL.md 文件`);
      return;
    }

    // 读取 skill 描述
    const skillMd = fs.readFileSync(skillInfoPath, 'utf-8');
    const description = this.parseDescription(skillMd);

    // 查找脚本文件
    const scriptsPath = path.join(skillPath, 'scripts');
    let jsScript: string | undefined;
    let shellScript: string | undefined;

    if (fs.existsSync(scriptsPath)) {
      const scripts = fs.readdirSync(scriptsPath);
      
      for (const script of scripts) {
        const scriptPath = path.join(scriptsPath, script);
        const ext = path.extname(script);
        const baseName = path.basename(script, ext);
        
        if (ext === '.js' || ext === '.mjs') {
          jsScript = script;
        } else if (ext === '.sh') {
          shellScript = script;
        }
      }
    }

    const skillInfo: SkillInfo = {
      name: skillName,
      description,
      scripts: {
        js: jsScript,
        shell: shellScript,
      },
      installed: true,
    };

    this.skills.set(skillName, skillInfo);
    console.log(`📦 已加载 skill: ${skillName}`);
  }

  /**
   * 解析 SKILL.md 中的描述
   */
  private parseDescription(skillMd: string): string {
    const match = skillMd.match(/description:\s*(.+)/);
    return match ? match[1].trim() : '';
  }

  /**
   * 获取所有已加载的 skills
   */
  getSkills(): SkillInfo[] {
    return Array.from(this.skills.values());
  }

  /**
   * 获取指定 skill 信息
   */
  getSkill(name: string): SkillInfo | undefined {
    return this.skills.get(name);
  }

  /**
   * 检查消息是否包含 skill 调用
   * 格式: <skill:name>args</skill>
   */
  parseSkillCalls(content: string): Array<{ skill: string; args: string }> {
    const calls: Array<{ skill: string; args: string }> = [];
    const regex = /<skill:(\w+)>(.*?)<\/skill>/gs;
    let match;

    while ((match = regex.exec(content)) !== null) {
      calls.push({
        skill: match[1],
        args: match[2].trim(),
      });
    }

    return calls;
  }

  /**
   * 执行 skill 脚本
   */
  async executeSkill(skillName: string, args: string): Promise<SkillResult> {
    const skill = this.skills.get(skillName);
    
    if (!skill) {
      return {
        success: false,
        output: '',
        error: `Skill '${skillName}' 不存在`,
      };
    }

    const scriptsPath = path.join(this.skillsDir, skillName, 'scripts');

    // 优先使用 JS 脚本
    if (skill.scripts.js) {
      return this.executeJsScript(scriptsPath, skill.scripts.js, args);
    }
    
    // 其次使用 Shell 脚本
    if (skill.scripts.shell) {
      return this.executeShellScript(scriptsPath, skill.scripts.shell, args);
    }

    return {
      success: false,
      output: '',
      error: `Skill '${skillName}' 没有可执行的脚本`,
    };
  }

  /**
   * 执行 JS 脚本
   */
  private async executeJsScript(
    scriptsPath: string,
    scriptFile: string,
    args: string
  ): Promise<SkillResult> {
    return new Promise((resolve) => {
      const scriptPath = path.join(scriptsPath, scriptFile);
      const command = `node "${scriptPath}" ${args.replace(/"/g, '\\"')}`;

      exec(command, { maxBuffer: 10 * 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          resolve({
            success: false,
            output: stdout,
            error: stderr || error.message,
          });
        } else {
          resolve({
            success: true,
            output: stdout,
          });
        }
      });
    });
  }

  /**
   * 执行 Shell 脚本
   */
  private async executeShellScript(
    scriptsPath: string,
    scriptFile: string,
    args: string
  ): Promise<SkillResult> {
    return new Promise((resolve) => {
      const scriptPath = path.join(scriptsPath, scriptFile);
      const command = `bash "${scriptPath}" ${args.replace(/"/g, '\\"')}`;

      exec(command, { maxBuffer: 10 * 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          resolve({
            success: false,
            output: stdout,
            error: stderr || error.message,
          });
        } else {
          resolve({
            success: true,
            output: stdout,
          });
        }
      });
    });
  }

  /**
   * 处理消息中的所有 skill 调用
   */
  async processSkillCalls(content: string): Promise<string> {
    const calls = this.parseSkillCalls(content);
    
    if (calls.length === 0) {
      return content;
    }

    let processedContent = content;

    for (const call of calls) {
      console.log(`⚡ 执行 skill: ${call.skill} ${call.args}`);
      const result = await this.executeSkill(call.skill, call.args);
      
      if (result.success) {
        // 替换 skill 标签为执行结果
        const skillTag = `<skill:${call.skill}>${call.args}</skill>`;
        processedContent = processedContent.replace(
          skillTag,
          `\n【执行结果】${call.skill}:\n${result.output}\n`
        );
      } else {
        // 替换为错误信息
        const skillTag = `<skill:${call.skill}>${call.args}</skill>`;
        processedContent = processedContent.replace(
          skillTag,
          `\n【执行失败】${call.skill}: ${result.error}\n`
        );
      }
    }

    return processedContent;
  }
}

export default SkillManager;
