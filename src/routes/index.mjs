import { Router } from "express";
import PagesRoutes from "./pages.routes.mjs";
import PostsRoutes from "./posts.routes.mjs";

export default class GlobalRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.use('/pages', PagesRoutes); // Prefijo de rutas para páginas
        this.router.use('/posts', PostsRoutes); // Prefijo de rutas para posts
    }
}

