import { Router } from "express";
import PageController from "../controllers/page.controller.mjs";
import { validatePageCreation } from "../middlewares/validators/page.filters.mjs";
class PagesRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        return [
            this.router.get('/', PageController.getAllPages),
            this.router.post('/', validatePageCreation,PageController.createPage),
            this.router.get('/:id', PageController.getPageById),
            this.router.put('/:id', PageController.updatePage),
            this.router.delete('/:id', PageController.deletePage)
        ];
    }
}

export default new PagesRoutes().router;