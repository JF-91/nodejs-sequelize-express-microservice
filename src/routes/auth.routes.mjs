import { Router } from "express";
import AuthController from "../controllers/auth.controller.mjs";

class AuthRoutes {
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post("/login", AuthController.login);
  }
}

export default new AuthRoutes().router;
