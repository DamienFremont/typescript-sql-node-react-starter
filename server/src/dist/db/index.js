"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const Product_1 = require("./Product");
const configJson = require('./../../../config/config.json');
const env = process.env.NODE_ENV || "development";
const config = configJson[env];
const url = config.url || process.env.DATABSE_CONNECTION_URI;
const sequelize = new Sequelize(url, config);
const db = {
    sequelize,
    Sequelize,
    Product: Product_1.default(sequelize),
};
Object.keys(db).forEach((model) => {
    if (model.associate) {
        model.associate(db);
    }
});
exports.default = db;
//# sourceMappingURL=index.js.map