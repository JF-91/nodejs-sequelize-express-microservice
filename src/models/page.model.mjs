import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel.mjs";

class Page extends BaseModel {
  static init(sequelize) {
    return super.init(
      {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        slug: DataTypes.STRING,
        metaTitle: DataTypes.STRING,
        metaDescription: DataTypes.STRING,
        metaKeywords: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Page",
      }
    );
  }

  static associate(models) {
    // Una Page tiene muchos Posts
    this.hasMany(models.Post, {
      foreignKey: "pageId",
      as: "posts",
    });
  }
}
    
export default Page;