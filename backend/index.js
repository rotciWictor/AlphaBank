import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import clientRoute from "./src/routes/client.route.js";
import expensesRoute from "./src/routes/expenses.route.js";
import receivableRoute from "./src/routes/receivables.route.js";
import accountRoute from "./src/routes/account.route.js";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());

app.use(clientRoute);
app.use(expensesRoute);
app.use(receivableRoute);
app.use(accountRoute);

app.listen(process.env.PORT || 4000, () => {
    console.log("Server listening on port", 4000);
});
