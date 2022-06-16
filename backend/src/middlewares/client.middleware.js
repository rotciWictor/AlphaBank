import { connection } from '../config/database.js'
import { client } from '../schemas/client.schema.js'

export const checkIfClientExists = async (req, res, next) => {
    const { cpf } = req.body;
    const validation = client.validate({...req.body});
    
    if (validation.error){
        console.log(validation.error.message)
        return res.status(400).send("Invalid customer");
    }
    
    try {
        const client = await connection.query("SELECT * from clients WHERE cpf = $1", [cpf]);

        if( client.rowCount === 0 ) return next();
        

        console.log("aqui")
        res.sendStatus(401);
    }
    catch (error) {
        res.status(401).send(error.message);
    }
}

export const checkClient = async (req, res, next) => {
    const { cpf } = req.body;
    const validation = client.validate({...req.body});
    
    if (validation.error){
        console.log(validation.error.message)
        return res.status(400).send("Invalid customer");
    }
    
    try {
        const client = await connection.query("SELECT * from clients WHERE cpf = $1", [cpf]);

        if( client.rowCount === 1 ) return next();
        

        console.log("aqui")
        res.sendStatus(401);
    }
    catch (error) {
        res.status(401).send(error.message);
    }
}