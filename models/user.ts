import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      uId: { type: DataTypes.STRING, unique: true },
      role: { type: DataTypes.STRING, allowNull: false },
      uName: { type: DataTypes.STRING },
      fName: { type: DataTypes.STRING, allowNull: false },
      lName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING },
      pin: { type: DataTypes.STRING },
      wallets: { type: DataTypes.TEXT },
      profileImg: { type: DataTypes.STRING, allowNull: false },
      birth: { type: DataTypes.DATE },
      signup: { type: DataTypes.DATE, allowNull: false },
      gender: { type: DataTypes.STRING },
      country: { type: DataTypes.STRING, allowNull: false },
      language: { type: DataTypes.STRING, allowNull: false },
      thirdParty: { type: DataTypes.TEXT },
      preferences: { type: DataTypes.TEXT },
      banned: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
