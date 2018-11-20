import * as Sequelize from "sequelize";
import ProductAttributes from "../../../client/src/model/product/ProductModel";

type ProductInstance = Sequelize.Instance<ProductAttributes> & ProductAttributes;

export default (sequalize: Sequelize.Sequelize) => {
  return sequalize.define<ProductInstance, ProductAttributes>("Products", {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    name: { type: Sequelize.STRING, allowNull: false },
    price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
    type: { type: Sequelize.STRING, allowNull: false },
    archived: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
  });
};