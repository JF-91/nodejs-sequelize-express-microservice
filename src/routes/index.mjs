import { Router } from "express";
import { expressjwt } from "express-jwt";
import PagesRoutes from "./pages.routes.mjs";
import PostsRoutes from "./posts.routes.mjs";
import AuthRoutes from "./auth.routes.mjs";
import UserRoutes from "./user.routes.mjs";

export default class GlobalRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        const authMiddleware = expressjwt({
          secret: process.env.JWT_SECRET,
          algorithms: ["HS256"],
        });

        this.router.use("/auth", AuthRoutes);
        this.router.use("/users", authMiddleware, UserRoutes);
        this.router.use('/pages', authMiddleware, PagesRoutes);
        this.router.use('/posts', authMiddleware, PostsRoutes);
    }
}

