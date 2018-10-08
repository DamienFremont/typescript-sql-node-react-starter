import * as Sequelize from "sequelize";
import productFactory from "./Product";
const configJson = require('./../../../config/config.json');

const env = process.env.NODE_ENV || "development";
const config = configJson[env];
const url = config.url || process.env.DATABSE_CONNECTION_URI;

const sequelize = new Sequelize(url, config);

const db = {
  sequelize,
  Sequelize,
  Product: productFactory(sequelize),
};

Object.keys(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;