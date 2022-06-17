import { Router } from "express";
import {
    addClient,
    getClients,
    getClient,
    updateClient,
    loginClient,
} from "../controllers/client.controller.js";
import { validationJWT } from "../middlewares/accountjwt.middleware.js";
import { checkIfClientExists, checkClient } from "../middlewares/client.middleware.js";

const clientRoute = Router();

clientRoute.post("/client/create", checkIfClientExists, addClient);
clientRoute.get("/allclients", getClients);
clientRoute.get("/client", getClient);
clientRoute.post("/login", loginClient);
clientRoute.post("/client/update", checkClient, updateClient);

export default clientRoute;
