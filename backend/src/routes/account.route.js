import { Router } from "express";
import { getBalance, getBalance2, makeTransaction, getPassword, changePassword } from "../controllers/account.controller.js";
import { checkBalance } from "../middlewares/expenses.middleware.js";

const accountRoute = Router();

accountRoute.get("/balance", getBalance);
accountRoute.post("/balance2", getBalance2);
accountRoute.get("/getpassword", getPassword);
accountRoute.post("/changepassword", changePassword);
accountRoute.post("/maketransaction", checkBalance, makeTransaction )

export default accountRoute;
