import { connection } from '../config/database.js'

export const addReceivable = async (req, res) => {
    const {depositAmount, cpf} = req.body

    try {
        let balance = await connection.query("SELECT balance_available, account.id FROM account, clients WHERE clients.account_id = account.id AND clients.cpf = $1",[cpf]);

        let newBalance = depositAmount + parseFloat(balance.rows[0].balance_available);

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

export const getReceivable = async (req, res) => {
   
}
