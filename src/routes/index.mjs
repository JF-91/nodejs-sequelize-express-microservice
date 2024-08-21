import { Router } from "express";

export default class GlobalRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        return [
            this.router.get('/', (req, res) => {
                res.json({ message: 'Hello World' });
            }),
            this.router.get('/about', (req, res) => {
                res.json({ message: 'About Page' });
            })
       ];
    }
}

