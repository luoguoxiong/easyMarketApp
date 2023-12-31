import * as sequelize from 'sequelize';
export interface AppModelIn {
  /** 应用AppId */
  appId:string
  /** 创建用户Id */
  createId:number
  /** app使用状态 */
  status: 0 | 1
  createdAt?: string
  updatedAt?:string
}

export const AppModel:sequelize.ModelAttributes = {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  appId: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
    comment: '应用AppId',
  },
  createId: {
    type: sequelize.INTEGER,
    defaultValue: false,
    allowNull: false,
    comment: '创建人用户ID',
  },
  status: {
    type: sequelize.INTEGER(),
    comment: 'app使用状态',
  },
  createdAt: {
    type: sequelize.DATE,
    comment: '创建日期',
  },
  updatedAt: {
    type: sequelize.DATE,
    comment: '更新日期',
  },
};
