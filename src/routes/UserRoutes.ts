import { Router } from "express";
import { getUser } from "../controllers/UserController";

const routes = Router();

routes.get("/", getUser);

export default routes;
