import Page from "./page.model.mjs";
import Post from "./post.model.mjs";
import User from "./user.model.mjs";
import Role from "./role.model.mjs";

class InitModels {
  constructor(sequelize) {
    this.sequelize = sequelize;
    this.init();
    this.associateModels();
  }

  async init() {
    Page.init(this.sequelize);
    Post.init(this.sequelize);
    User.init(this.sequelize);
    Role.init(this.sequelize);
  }

  associateModels() {
    // Configura las relaciones entre modelos
    Page.associate(this.sequelize.models);
    Post.associate(this.sequelize.models);
    User.associate(this.sequelize.models);
    Role.associate(this.sequelize.models);
  }

  async sync() {
    try {
      await this.sequelize.sync({ alter: true });
      console.log("Modelos sincronizados con la base de datos.");
    } catch (error) {
      console.error(
        "Error al sincronizar los modelos con la base de datos:",
        error
      );
    }
  }
}

export default InitModels;
