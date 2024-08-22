import { Router } from 'express';
import UserController from '../controllers/user.controller.mjs';
import { validateUserCreation } from '../middlewares/validators/user.filters.mjs';

class UserRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        return [
            this.router.get('/', UserController.getAllUsers),
            this.router.post('/', validateUserCreation, UserController.createUser),
            this.router.get('/:id', UserController.getUserById),
        ];
    }
}

export default new UserRoutes().router;