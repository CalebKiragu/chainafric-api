import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  class Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Log.init(
    {
      lId: { type: DataTypes.STRING, unique: true },
      uId: { type: DataTypes.STRING },
      wId: { type: DataTypes.STRING },
      aId: { type: DataTypes.STRING },
      type: { type: DataTypes.STRING, allowNull: false },
      event: { type: DataTypes.STRING, allowNull: false },
      ip: { type: DataTypes.STRING },
      detail: { type: DataTypes.TEXT },
      timestamp: { type: DataTypes.BIGINT, allowNull: false },
    },
    {
      sequelize,
      modelName: "Log",
    }
  );
  return Log;
};
