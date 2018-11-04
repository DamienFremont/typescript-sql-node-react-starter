"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
exports.default = (sequalize) => {
    const attributes /*: SequelizeAttributes<ProductAttributes>*/ = {
        id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        name: { type: Sequelize.STRING, allowNull: false },
        price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
        type: { type: Sequelize.STRING, allowNull: false },
        archived: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
    };
    return sequalize.define("Product", attributes);
};
//# sourceMappingURL=Product.js.map