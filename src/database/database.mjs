import { Sequelize } from "sequelize";

class Database {
    constructor(host, user, password, database) {
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
        this.sequelize = new Sequelize(
            this.database,
            this.user,
            this.password,
            {
                host: this.host,
                dialect: "mysql",
                logging: false,
            }
        );
    }
  
  async init() {
    try {
      await this.sequelize.authenticate();
      console.log("Conexión a la base de datos exitosa.");
      // await this.sequelize.sync();
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
    }
  }

  async close() {
    try {
      await this.sequelize.close();
      console.log("Conexión a la base de datos cerrada.");
    } catch (error) {
      console.error("Error al cerrar la conexión con la base de datos:", error);
    }
  }

  getConnection() {
    return this.sequelize;
  }
}

export default Database;
