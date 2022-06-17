import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"

import clientRoute from "./src/routes/client.route.js";
import expensesRoute from "./src/routes/expenses.route.js";
import receivableRoute from "./src/routes/receivables.route.js";
import accountRoute from "./src/routes/account.route.js";

const configCors = {
    origin: ["http://localhost:3000"],
    credentials: true,
    optionSuccessStatus: 200,
}
const app = express();

app.use(json());
app.use(cors(configCors));
app.use(cookieParser());

dotenv.config();



app.use(clientRoute);
app.use(expensesRoute);
app.use(receivableRoute);
app.use(accountRoute);

app.listen(process.env.PORT || 4000, () => {
    console.log("Server listening on port", 4000);
});
