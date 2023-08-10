import DataTypes from 'sequelize';
import sequelize from '../../libraries/database/db.connect';
import Order from '../models/order.model';
import Product from '../models/product.model';
const History = sequelize.define(
  'History',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    size_product: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'History',
    timestamps: false,
  }
);

History.belongsTo(Order, { foreignKey: 'order_id', onDelete: 'CASCADE' });
Order.hasMany(History, { foreignKey: 'order_id' });
History.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE' });
Product.hasMany(History, { foreignKey: 'product_id' });

// Sync the models with the database
History.sync()
  .then(() => {
    console.log('Create History successfully');
  })
  .catch((err) => {
    console.log('Error create Favorite: ', err);
  });
export default History;
