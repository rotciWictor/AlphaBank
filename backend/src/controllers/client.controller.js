import { connection } from "../config/database.js";

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
