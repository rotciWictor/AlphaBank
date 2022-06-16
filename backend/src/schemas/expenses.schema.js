import joi from 'joi';

export const expenses = joi.object({
    transaction_value: joi.number().required()
})