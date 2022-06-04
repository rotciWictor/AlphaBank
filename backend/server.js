const express = require("express");
const app = express();
const port = 3000;
const accounts = require("./routes/accounts/accounts");
const expenses = require("./routes/accounts/expenses");
const receivables = require("./routes/accounts/receivables");
const cards = require("./routes/cards/cards");
const login = require("./routes/users/login")
const registration = require("./routes/users/registration")

const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const corsOptions = { credentials: true, origin: "http://localhost:8080"};
// const corsOptions = { credentials: true, origin: process.env.URL };

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/cards", cards);

app.use("/login",login);
app.use("/registration",registration);

app.use("/accounts", accounts)
app.use("/receivables",receivables)
app.use("/expenses",expenses);


app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
