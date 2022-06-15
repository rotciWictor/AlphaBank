import { Router } from 'express';
import { addExpense } from '../controllers/expenses.controller.js';
import { checkBalance } from '../middlewares/expenses.middleware.js';

const expensesRoute = Router();

expensesRoute.post('/expense', checkBalance, addExpense);

export default expensesRoute;
