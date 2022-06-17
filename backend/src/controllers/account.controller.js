import { connection } from '../config/database.js'

export const addAccount = async (req, res) => {
    
}

export const getAccount = async (req, res) => {

}


export const updateAccount = async (req, res) => {
    
}

export const deleteAccount = async (req, res) => {
    
}

export const getBalance = async (req, res) => {
    const { cpf } = req.headers
    try {
        let balance = await connection.query("SELECT balance_available FROM account, clients WHERE clients.account_id = account.id AND clients.cpf = $1",[cpf]);

        res.status(200).send(balance.rows[0].balance_available)
    } catch (error) {
        res.status(401).send(error.message);
    }
}
export const getBalance2 = async (req, res) => {
    const { cpf } = req.body
    try {
        let balance = await connection.query("SELECT balance_available FROM account, clients WHERE clients.account_id = account.id AND clients.cpf = $1",[cpf]);

        res.status(200).send(balance.rows[0].balance_available)
    } catch (error) {
        res.status(401).send(error.message);
    }
}

export const makeTransaction = async (req,res) => {
    const {cpf, cpfDest, amount} = req.body
    try {

        let balance = await connection.query("SELECT balance_available, account.id FROM account, clients WHERE clients.account_id = account.id AND clients.cpf = $1",[cpf]);

        let newBalance = parseFloat(balance.rows[0].balance_available) - amount;

        await connection.query(`
        UPDATE
            account
        SET
            balance_available = $1
        WHERE
            account.id = $2
        `, [newBalance, balance.rows[0].id]);

        balance = await connection.query("SELECT balance_available, account.id FROM account, clients WHERE clients.account_id = account.id AND clients.cpf = $1",[cpfDest]);

        newBalance = amount + parseFloat(balance.rows[0].balance_available);

        await connection.query(`
        UPDATE account 
        SET balance_available = $1 
        WHERE 
        account.id = $2
        `,
        [newBalance, balance.rows[0].id])


        res.sendStatus(200);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

export const getPassword = async (req, res) => {
    const {cpf} = req.headers
    try {
        let passwordDB = await connection.query(`
            SELECT password FROM clients WHERE cpf = $1
        `,[cpf])
        res.status(200).send(passwordDB.rows[0].password);
    } catch (error) {        
        res.status(401).send(error.message);
    }
}

export const changePassword = async (req, res) => {

}