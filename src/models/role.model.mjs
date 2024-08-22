import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel.mjs";

class Role extends BaseModel {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Role",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      through: "UserRoles", // Nombre de la tabla intermedia
      as: "users",
      foreignKey: "roleId",
      otherKey: "userId",
    });
  }
}

export default Role;