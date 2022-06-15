import { connection } from "../config/database.js";

export const addExpense = async (req, res) => {
    const { cpf, amount } = req.body;

    try {
        let balance = await connection.query("SELECT balance_available, account.id FROM account, clients WHERE clients.account_id = account.id AND clients.cpf = $1",[cpf]);

        console.log(amount)
        console.log(parseFloat(balance.rows[0].balance_available))

        let newBalance = parseFloat(balance.rows[0].balance_available) - amount;

        console.log(newBalance);
        console.log(balance.rows)

        await connection.query(`
        UPDATE
            account
        SET
            balance_available = $1
        WHERE
            account.id = $2
        `, [newBalance, balance.rows[0].id]);

        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
};

export const getExpenses = async (req, res) => {};
