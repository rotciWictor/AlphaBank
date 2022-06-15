import { connection } from '../config/database.js'
import { expenses } from '../schemas/expenses.schema.js'

export const checkBalance = async (req, res, next) => {
    const { cpf, amount } = req.body

    try {
        let balance = await connection.query("SELECT balance_available FROM account, clients WHERE clients.account_id = account.id AND clients.cpf = $1",[cpf]);

        if(amount <= balance.rows[0].balance_available) return next();
        
        res.status(401).send("Invalid Operation - Without Balance")
    } catch (error) {
        res.status(400).send(error.message)
    }
}