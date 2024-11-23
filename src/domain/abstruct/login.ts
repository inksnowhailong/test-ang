import type { loginResult } from '../models/loginModel';

/**
 * 登录模块
 */
export interface LoginModule {
  /**
   * 登录
   */
  login(...args: any[]): Promise<loginResult>;
  /**
   * 登出
   */
  logout(...args: any[]): Promise<any>;
  /**
   * 重新登录
   */
  relogin(...args: any[]): Promise<loginResult>;
  /**
   * 注册
   */
  register(...args: any[]): Promise<any>;
}

export abstract class AbsLogin implements LoginModule {
  abstract login(...args: any[]): Promise<loginResult>;
  abstract logout(...args: any[]): Promise<any>;
  abstract relogin(...args: any[]): Promise<loginResult>
  abstract register(...args: any[]): Promise<any>
}
