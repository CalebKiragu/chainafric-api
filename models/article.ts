import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init(
    {
      aId: { type: DataTypes.STRING, unique: true },
      author: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      source: { type: DataTypes.STRING, allowNull: false },
      url: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.TEXT },
      language: { type: DataTypes.STRING, allowNull: false },
      translated: { type: DataTypes.BOOLEAN, defaultValue: false },
      translations: { type: DataTypes.TEXT },
      timestamp: { type: DataTypes.BIGINT, allowNull: false },
      img: { type: DataTypes.STRING, allowNull: false },
      video: { type: DataTypes.STRING },
      category: { type: DataTypes.STRING },
      tags: { type: DataTypes.STRING },
      original: { type: DataTypes.BOOLEAN, defaultValue: true },
      metadata: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
  return Article;
};
