import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel.mjs";

class Post extends BaseModel {
  static init(sequelize) {
    return super.init(
      {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        imageUrl: DataTypes.STRING,
        published: DataTypes.BOOLEAN,
        urlLink: DataTypes.STRING,
        urlName: DataTypes.STRING,
        secondUrlLink: DataTypes.STRING,
        secondUrlName: DataTypes.STRING,
        pageId: {
          type: DataTypes.UUID,
          references: {
            model: "Pages",
            key: "id",
          },
        },
      },
      {
        sequelize,
        modelName: "Post",
      }
    );
  }

  static associate(models) {
    // Un Post pertenece a una Page
    this.belongsTo(models.Page, {
      foreignKey: "pageId",
      as: "page",
    });
  }
}

export default Post;
