import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import GlobalRoutes from "./routes/index.mjs";
import Database from './database/database.mjs';
dotenv.config();

class App {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use(morgan('dev'));

        this.connectDatabase();
        this.routes();
        this.listen();
    }

    async connectDatabase() {
        this.database = new Database(
            process.env.DB_HOST,
            process.env.MYSQL_USER,
            process.env.MYSQL_PASSWORD,
            process.env.DB_DATABASE
        );

        await this.database.init();
    }

    routes() {
        this.app.use('/', new GlobalRoutes().router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
    
}

export default App;