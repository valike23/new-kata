
// we want to test sequlizer and sqlite here

import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../../sqlite/test.db'
  });
export async function authenticate(){
  try {
   await sequelize.authenticate();
    
      return "success"
    
  } catch (error) {
    return JSON.stringify(error)
  }
}


  