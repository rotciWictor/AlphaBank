const dbConnection = require("../../modules/DbConection");
// const queries = require("../../modules/queries.js");
const router = require("express").Router();
const path = require("path");
const bcrypt = require("bcrypt");
const JWTTokens = require("../../utils/jwt-helpers");
// const cookieParser = require("cookie-parser");

router.post("/", async (req, res) => {
  const { cpf, password } = req.body;
  try {

    const user = await dbConnection.query(
      `SELECT * , cpf FROM users WHERE cpf = $1`,[cpf]
    );
     if(user.length == 0){
       return res.json('CPF não Cadastrado')
     }

    const hashPassword = user[0].password;

    const matchs = await bcrypt.compare(password,hashPassword);
  
    if (!matchs) {
      return res.status(400).json("Senha incorreta");
    }
    const data = {};
    data.id = user[0].id;
    data.name = user[0].name;
    data.cpf = user[0].cpf;

    let sendname = user[0].name;
    let sendemail = user[0].email;
    let sendcpf = user[0].cpf;
    let sendaddress = user[0].address;
    let sendzipcode = user[0].zip_code;
    let sendtelephone = user[0].telephone;
    
    let tokens = JWTTokens(data);
      console.log(tokens)
    res.cookie("Cookie", tokens.accessToken, {
      sameSite: "none",
      secure: true,
    });
    res.status(200);
    res.json(true)
  } catch (error) {
    console.error(error);
    
  }
});

router.get("/getinfos", async (req, res) => {
  const id = req.param('id')
  const user = await dbConnection.query(`SELECT * FROM users WHERE id = $1 `,[id]);

  console.log(user);

  res.json(user);
});


module.exports = router;