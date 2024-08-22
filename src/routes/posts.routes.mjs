import { Router } from "express";
import PostController from "../controllers/posts.controller.mjs";
import { validatePostCreation } from "../middlewares/validators/posts.filters.mjs";

class PostsRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        return [
            this.router.get('/', PostController.getAllPosts),
            this.router.post('/', validatePostCreation ,PostController.createPost),
            this.router.get('/:id', PostController.getPostById),
            this.router.put('/:id', PostController.updatePost),
            this.router.delete('/:id', PostController.deletePost)
        ];
    }
}

export default new PostsRoutes().router;