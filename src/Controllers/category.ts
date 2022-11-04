
import { DataTypes, Model, Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../../sqlite/test.db'
  });
export interface Icategory {
    id?: number;
    categoryName?: string;
    gender?: string;
    competitionId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
  export class Category extends Model {
    declare id: number;
    declare categoryName: string;
    declare competitionId: number;
    declare gender: string
  };

  
Category.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true

    },
    categoryName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

    },
    competitionId:{
        type: DataTypes.BIGINT,
        

    },
    gender:{
        type: DataTypes.STRING,
        defaultValue: "none"
    }
   
},{sequelize, modelName: 'category'});

Category.sync();


export const createCategory = async (category: any)=>{
    try {
       const resp = await Category.create(category);
       return {status: 'success', body: resp}
    } catch (error) {
        return {status: 'failed', body: error}
    }
}

