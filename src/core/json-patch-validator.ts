// @ts-ignore
import { applyPatch } from 'fast-json-patch/index.mjs';
import type { Operation, PatchResult } from 'fast-json-patch';

/**
 * JSONPatch 验证结果接口
 */
export interface ValidationResult {
  /** 验证是否通过 */
  valid: boolean;
  /** 错误信息列表 */
  errors: string[];
}

/**
 * JSONPatch 操作类型
 */
export type PatchOperationType = 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';

/**
 * 检查指定路径在对象中是否存在
 * @param obj 要检查的对象
 * @param path JSON Pointer 格式的路径
 * @returns 路径是否存在
 */
function pathExists(obj: any, path: string): boolean {
  try {
    const pathParts = path.split('/').filter(p => p !== '');
    let current = obj;

    for (const part of pathParts) {
      if (Array.isArray(current)) {
        const index = parseInt(part, 10);
        if (isNaN(index) || index < 0 || index >= current.length) {
          return false;
        }
        current = current[index];
      } else if (typeof current === 'object' && current !== null) {
        if (!(part in current)) {
          return false;
        }
        current = current[part];
      } else {
        return false;
      }
    }

    return true;
  } catch (error) {
    return false;
  }
}

/**
 * 验证 JSONPatch 操作的有效性
 * @param original 原始对象
 * @param patches 要验证的 JSONPatch 操作数组
 * @returns 验证结果
 */
export function validatePatchOperations(original: any, patches: Operation[]): ValidationResult {
  const errors: string[] = [];
  const result: ValidationResult = { valid: true, errors: [] };

  try {
    patches.forEach((patch, index) => {
      const { op, path, value, from } = patch as any;

      // 验证操作类型
      const validOps: PatchOperationType[] = ['add', 'remove', 'replace', 'move', 'copy', 'test'];
      if (!validOps.includes(op as PatchOperationType)) {
        errors.push(`操作 ${index + 1}: 无效的操作类型 "${op}"`);
        return;
      }

      // 验证路径格式
      if (!path || !path.startsWith('/')) {
        errors.push(`操作 ${index + 1}: 无效的路径格式 "${path}"`);
        return;
      }

      // 检查路径是否存在（对于 remove, replace, test 操作）
      // 注意：move 和 copy 操作的目标路径允许不存在，因为它们是创建新路径的操作
      const pathRequiredOps: PatchOperationType[] = ['remove', 'replace', 'test'];
      if (pathRequiredOps.includes(op as PatchOperationType)) {
        if (!pathExists(original, path)) {
          // 对于数组索引，检查是否超出范围
          const pathParts = path.split('/').filter((p: string) => p !== '');
          let current = original;
          let pathValid = true;

          for (let i = 0; i < pathParts.length; i++) {
            const part = pathParts[i];
            if (Array.isArray(current)) {
              const index = parseInt(part, 10);
              if (isNaN(index) || index < 0 || index >= current.length) {
                pathValid = false;
                break;
              }
              current = current[index];
            } else if (typeof current === 'object' && current !== null) {
              if (!(part in current)) {
                pathValid = false;
                break;
              }
              current = current[part];
            } else {
              pathValid = false;
              break;
            }
          }

          if (!pathValid) {
            errors.push(`操作 ${index + 1}: 路径 "${path}" 不存在或无效`);
          }
        }
      }

      // 验证 move 和 copy 操作的 from 路径
      const fromRequiredOps: PatchOperationType[] = ['move', 'copy'];
      if (fromRequiredOps.includes(op as PatchOperationType)) {
        if (!from || !from.startsWith('/')) {
          errors.push(`操作 ${index + 1}: ${op} 操作需要有效的 "from" 路径`);
        } else if (!pathExists(original, from)) {
          errors.push(`操作 ${index + 1}: "from" 路径 "${from}" 不存在`);
        }
      }
    });

    if (errors.length > 0) {
      result.valid = false;
      result.errors = errors;
    }
  } catch (error: any) {
    result.valid = false;
    result.errors = [`验证过程中发生错误: ${error?.message || String(error)}`];
  }

  return result;
}

/**
 * 应用 JSONPatch 操作到对象
 * @param original 原始对象
 * @param patch JSONPatch 操作数组
 * @returns PatchResult
 */
export function applyJSONPatch(original: any, patch: Operation[]): PatchResult<any> {
  return applyPatch(original, patch);
}
