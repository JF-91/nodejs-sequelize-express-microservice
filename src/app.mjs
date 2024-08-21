import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import GlobalRoutes from "./routes/index.mjs";
import Database from "./database/database.mjs";
import InitModels from "./models/index.mjs";
dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan("dev"));

    this.connectDatabase().then(() => {
      this.initModels();
      this.routes();
      this.listen();
    });
  }

  async connectDatabase() {
    this.database = new Database(
      process.env.DB_HOST,
      process.env.MYSQL_USER,
      process.env.MYSQL_PASSWORD,
      process.env.MYSQL_DATABASE
    );

    await this.database.init();
  }

  async initModels() {
    this.initModels = new InitModels(this.database.sequelize);
  }

  routes() {
    this.app.use("/", new GlobalRoutes().router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
