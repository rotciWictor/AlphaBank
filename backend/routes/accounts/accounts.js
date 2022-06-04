const dbConnection = require("../../modules/DbConection")
// const queries = require("../../modules/queries.js");
const router = require("express").Router();
const path = require("path");

router.post("/create", async (req, res) => {
  try {


  } catch (error) {
    console.error(error);
  }
});

router.delete("/delete", async (req, res) => {});

router.get("/show", async (req, res) => {});

router.put("/update", async (req, res) => {});

module.exports = router;