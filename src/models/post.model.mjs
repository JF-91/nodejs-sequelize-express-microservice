import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel.mjs";

class Post extends BaseModel {
    static init(sequelize) {
        return super.init(
        {
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Posts",
        }
        );
    }
}

export default Post;