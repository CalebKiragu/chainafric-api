import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notification.init(
    {
      nId: { type: DataTypes.STRING, unique: true },
      uId: { type: DataTypes.STRING, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      action: { type: DataTypes.STRING, allowNull: false },
      channel: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      timestamp: { type: DataTypes.BIGINT, allowNull: false },
      delivered: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "Notification",
    }
  );
  return Notification;
};
