import { connection } from "../config/database.js";
import jwt from "jsonwebtoken"
const tokenPassword = process.env.TOKEN_PASSWORD;

export const addClient = async (req, res) => {
    const { name, cpf, birthday, password } = req.body;
    const today = new Date();

    try {
        await connection.query(
            `INSERT INTO account (created_at) VALUES ($1);`,[today]);
        
        let account_id = await connection.query(`SELECT MAX(ID) FROM account`);
        
        await connection.query(
            `
            INSERT INTO clients 
                (name, cpf, birthday, password, account_id)
            VALUES 
                ($1, $2, $3, $4, $5);
        `,
            [name, cpf, birthday, password, account_id.rows[0].max]
        );

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const getClient = async (req, res) => {
    const { cpf } = req.body;

    let clients;

    try {
        if (!cpf) {
            clients = await connection.query("SELECT * FROM clients");
        } else {
            clients = await connection.query(
                "SELECT * FROM clients WHERE cpf =  $1",
                [cpf]
            );
        }

        res.status(200).send(clients.rows);
    } catch (error) {
        res.sendStatus(500);
    }
};

export const getClients = async (req, res) => {
    try {
        let clients = await connection.query("SELECT * FROM clients");

        res.status(200).send(clients.rows);
    } catch (error) {
        res.sendStatus(500);
    }
};

export const updateClient = async (req, res) => {
    const { name, cpf, birthday, password} = req.body;

    try {
        await connection.query(
            `
            UPDATE clients 
            SET name=$1, birthday=$3, password = $4
            WHERE cpf = $2;
        `,
            [name, cpf, birthday, password]
        );
        
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


export const loginClient = async (req,res) => {
    const {cpf, password} = req.body;
    const checkRegex = /\d{11}/;
    const verify = checkRegex.test(cpf);
    if(verify === true) {
        try {
            let users = await connection.query(
                'SELECT * FROM clients WHERE cpf=$1 AND password=$2', [cpf, password]
            );
            if(users.rows.length === 0) {
                res.status(400).send("Cliente não cadastrado");
            } else {
                console.log(users.rows)
                const token = await jwt.sign({clientId: users.rows[0].id, clientCPF: users.rows[0].cpf},tokenPassword);
                console.log(token)
                res.cookie("token", token); //como se fosse uma propriedade do objeto passa o nome e o valor
                res.json({clientId: users.rows[0].id, clientCPF: users.rows[0].cpf});
            }
        } catch (err) {
            console.log("errooooou")
            res.status(500).send(err.message);
        }
    }
};