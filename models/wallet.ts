import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Wallet.init(
    {
      wId: { type: DataTypes.STRING, unique: true },
      uId: { type: DataTypes.STRING, allowNull: false },
      chain: { type: DataTypes.STRING, allowNull: false },
      network: { type: DataTypes.STRING, allowNull: false },
      provider: { type: DataTypes.STRING, allowNull: false },
      dateAdded: { type: DataTypes.DATE, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      currency: { type: DataTypes.STRING, allowNull: false },
      subscribed: { type: DataTypes.BOOLEAN, defaultValue: false },
      metadata: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: "Wallet",
    }
  );

  return Wallet;
};
