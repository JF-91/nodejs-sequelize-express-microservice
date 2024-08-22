import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel.mjs";

class User extends BaseModel {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "User",
      }
    );
  }

  static associate(models) {
    // Relación muchos a muchos con el modelo Role
    this.belongsToMany(models.Role, {
      through: "UserRoles", // Nombre de la tabla intermedia
      as: "roles", // Alias para la relación
      foreignKey: "userId",
      otherKey: "roleId",
    });
  }
}
    

export default User;