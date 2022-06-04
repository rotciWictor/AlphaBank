const dbConnection = require("../../modules/DbConection")
// const queries = require("../../modules/queries.js");
const router = require("express").Router();
const path = require("path");

router.post("/create", async (req, res) => {
  try {
    const productData = req.body;

    console.log(productData);

    await dbConnection.query(`INSERT INTO products (name, description, content, price, image, create_at)
    VALUES ($1,$2,$3,$4,$5,$6)`,[productData.name, productData.description, productData.content, productData.price, productData.image, productData.create_at]);
    // await dbConnection.query(`INSERT INTO products (name,description,content,price,image,create_at)
    // VALUES (${productData.name},${productData.description}, ${productData.content}, ${productData.price}, ${productData.image}, ${productData.create_at}`);

    res.status(200)
    res.end("Cadastro concluido com sucesso!")

  } catch (error) {
    console.error(error);
  }
});

router.delete("/delete", async (req, res) => {});

router.get("/show", async (req, res) => {});

router.put("/update", async (req, res) => {});

module.exports = router;
