import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel.mjs";

class Page extends BaseModel {
    static init(sequelize) {
        return super.init(
        {
                title: DataTypes.STRING,
                content: DataTypes.TEXT,
                slug: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Pages",
        }
        );
    }
}
    
export default Page;