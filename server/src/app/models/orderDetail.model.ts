import DataTypes from 'sequelize';
import sequelize from '../../libraries/database/db.connect';
import Order from '../models/order.model';
import Product from '../models/product.model';
const OrderDetail = sequelize.define(
  'OrderDetails',
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
  },
  {
    tableName: 'OrderDetails',
    timestamps: false,
  }
);

Product.hasMany(OrderDetail, { foreignKey: 'product_id' });
OrderDetail.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE' });
Order.hasMany(OrderDetail, { foreignKey: 'order_id' });
OrderDetail.belongsTo(Order, { foreignKey: 'order_id', onDelete: 'CASCADE' });

OrderDetail.sync()
  .then(() => {
    console.log('Create OrderDetail successfully');
  })
  .catch((error) => {
    console.error('Error create OrderDetail:', error);
  });

export default OrderDetail;
