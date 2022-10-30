
import { DataTypes, Model, Sequelize } from "sequelize";
import { Competition } from "./competition";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../../sqlite/test.db'
  });

  export class Category extends Model {
    declare id: number;
    declare categoryName: string;
    declare competitionId: number;
     declare createdAt: Date;
    declare updatedAt: Date;
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
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
},{sequelize, modelName: 'category'});


  Category.belongsTo(Competition);