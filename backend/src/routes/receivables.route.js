import { Router } from "express";
import {addReceivable} from "../controllers/receivables.controller.js"

const receivableRoute = Router();

receivableRoute.post('/deposit', addReceivable);

export default receivableRoute;