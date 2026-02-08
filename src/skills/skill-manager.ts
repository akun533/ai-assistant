/**
 * Skill 管理器
 * 支持 JS 脚本和 Shell 脚本
 */

import { exec } from 'child_process';
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

/**
 * Skill 工具定义（用于传递给大模型）
 */
interface SkillTool {
  type: 'function';
  function: {
    name: string;
    description: string;
    parameters: {
      type: 'object';
      properties: Record<string, any>;
      required: string[];
    };
  };
}

export class SkillManager {
  private skillsDir: string;
  private skills: Map<string, SkillInfo> = new Map();
  private loaded: boolean = false;

  constructor(skillsDir: string = './src/skills') {
    this.skillsDir = skillsDir;
  }

  /**
   * 确保 skills 已加载
   */
  private async ensureLoaded(): Promise<void> {
    if (this.loaded) return;
    await this.loadSkills();
    this.loaded = true;
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
   * 获取所有 skills 的工具定义（用于传递给大模型）
   * 格式类似 OpenAI function calling
   */
  async getSkillTools(): Promise<SkillTool[]> {
    // 确保 skills 已加载
    await this.ensureLoaded();
    
    const tools: SkillTool[] = [];

    for (const skill of this.skills.values()) {
      // 解析 SKILL.md 中的参数信息
      const argsInfo = this.parseSkillArgs(skill.description);
      const description = this.extractDescription(skill.description);

      tools.push({
        type: 'function',
        function: {
          name: skill.name,
          description: `${description}。使用方式: <skill:${skill.name}>参数</skill:${skill.name}>`,
          parameters: {
            type: 'object',
            properties: argsInfo.properties,
            required: argsInfo.required,
            additionalProperties: false,
          },
        },
      });
    }

    console.log(`✅ 成功获取 ${tools.length} 个 Skill 工具定义`);
    return tools;
  }

  /**
   * 从 SKILL.md 描述中提取参数信息
   */
  private parseSkillArgs(description: string): { properties: Record<string, any>; required: string[] } {
    const properties: Record<string, any> = {
      args: {
        type: 'string',
        description: '传递给脚本的参数',
      },
    };

    // 尝试解析 Usage 中的参数
    const usageMatch = description.match(/Usage:\s*<skill:(\w+)>(.+?)<\/skill>/);
    if (usageMatch) {
      const paramsStr = usageMatch[2];
      // 简单处理：将整个参数作为字符串
      properties.args.description = `参数: ${paramsStr}`;
    }

    return {
      properties,
      required: [],
    };
  }

  /**
   * 从 SKILL.md 中提取纯描述
   */
  private extractDescription(description: string): string {
    // 移除 Usage、Options 等部分，保留功能描述
    const lines = description.split('\n');
    const descriptionLines: string[] = [];

    for (const line of lines) {
      if (line.startsWith('##') || line.startsWith('**')) {
        break;
      }
      descriptionLines.push(line);
    }

    return descriptionLines.join(' ').trim();
  }

  /**
   * 生成 Skills 提示词（用于 System Prompt）
   */
  generateSkillsPrompt(): string {
    const skills = this.getSkills();
    
    if (skills.length === 0) {
      return '';
    }

    let prompt = '\n## 可用的 Skills\n\n你可以使用以下脚本技能来帮助用户：\n\n';

    for (const skill of skills) {
      const description = this.extractDescription(skill.description);
      const usageMatch = skill.description.match(/Usage:\s*<skill:(\w+)>(.+?)<\/skill>/);
      const usage = usageMatch ? usageMatch[2] : '<参数>';

      prompt += `### ${skill.name}\n`;
      prompt += `${description}\n`;
      prompt += `- 使用格式: \`<skill:${skill.name}>${usage}</skill>\`\n\n`;
    }

    prompt += '**重要提示：**\n';
    prompt += '1. 当用户需要获取实时信息或执行特定任务时，调用相应的 skill\n';
    prompt += '2. 使用格式: `<skill:skillName>参数</skill>`\n';
    prompt += '3. 等待 skill 执行结果后再回答用户\n';
    prompt += '4. 将 skill 结果自然地融入你的回答中\n';

    return prompt;
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
    // 确保 skills 已加载
    await this.ensureLoaded();
    
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
      // 使用 tsx 运行 TypeScript 脚本
      const command = `tsx "${scriptPath}" ${args.replace(/"/g, '\\"')}`;

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
