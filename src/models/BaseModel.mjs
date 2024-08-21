import { DataTypes, Model } from "sequelize";

class BaseModel extends Model {
  static init(attributes, options) {
    const defaultAttributes = {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      ...attributes,
    };
    super.init(defaultAttributes, options);
  }
}

export default BaseModel;
