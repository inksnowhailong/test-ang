import { StorageKey, StorageData } from '../models/storageModel';

/**
 * 数据持久化
 */
export interface StorageModule {
  /**
   * 保存数据
   */
  saveData<K extends StorageKey, V extends StorageData[K]>(key: K, Val: V): any;
  /**
   * 获取数据
   */
  getData<K extends StorageKey, V extends StorageData[K]>(key: K): V;
  /**
   * 删除数据
   */
  deleteByKey<K extends StorageKey>(key:K): any;
  /**
   * 清空数据
   */
  clearData(...args: any[]): any;
  /**
   * 获取所有数据
   */
  getAllData(...args: any[]): any;
}
