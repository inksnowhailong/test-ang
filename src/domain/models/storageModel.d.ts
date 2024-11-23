/**
 * 系统环境
 */
enum System {
  window = 'window',
  mac = 'mac',
  linux = 'linux',
}
export interface StorageData {
  /**
   * token
   */
  token: string;
  /**
   * 登录信息
   */
  Info: Record<string, any>;
  /**
   * 上次登录时间
   */
  lastLoginTime: number;
  /**
   * 环境
   */
  system: System;
}

/**
 * 数据持久化的字段
 */
export type StorageKey = keyof StorageData;
