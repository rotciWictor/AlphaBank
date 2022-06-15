import { Router } from "express";
import { getBalance, makeTransaction } from "../controllers/account.controller.js";
import { checkBalance } from "../middlewares/expenses.middleware.js";

const accountRoute = Router();

accountRoute.get("/balance", getBalance);
accountRoute.post("/maketransaction", checkBalance, makeTransaction )

export default accountRoute;
