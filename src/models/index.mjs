import Page from "./page.model.mjs";
import Post from "./post.model.mjs";

class InitModels {
    constructor(sequelize) {
        this.sequelize = sequelize;
        this.init();
    }

    async init() {
        Page.init(this.sequelize);
        Post.init(this.sequelize);

        try {
          await this.sequelize.sync(); // Sincroniza los modelos con la base de datos
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
