

import { DataTypes, Model, Sequelize } from "sequelize";
import { Category } from "./category";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../../sqlite/test.db'
  });

export interface Icompetition{
    id?: number;
    competitionName?: string;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export class Competition extends Model {
    declare id: number;
    declare competitionName: string;
    declare image: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Competition.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true

    },
    competitionName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

    },
    image:{
        type: DataTypes.STRING,
        allowNull: true,

    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
},{sequelize, modelName: 'competition'});


Competition.hasMany(Category);

export const createCompetition = async (competition: Icompetition)=>{
    try {
     const resp = await   Competition.create(competition as any);
     return {
        status: 'success',
        body: resp
     }
    } catch (error) {
        return {
            status: 'failed',
            body: error
        }
    }
}