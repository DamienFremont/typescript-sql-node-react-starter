import * as Sequelize from "sequelize";
import ProductAttributes from "../../shared/api/ProductModel";

type ProductInstance = Sequelize.Instance<ProductAttributes> & ProductAttributes;

export default (sequalize: Sequelize.Sequelize) => {
  const attributes/*: SequelizeAttributes<ProductAttributes>*/ = {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    name: { type: Sequelize.STRING, allowNull: false },
    price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
    type: { type: Sequelize.STRING, allowNull: false },
    archived: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  };
  return sequalize.define<ProductInstance, ProductAttributes>("Product", attributes);
};