import joi from 'joi';

export const client = joi.object({
    name: joi.string().required(),
    cpf: joi.string().pattern(/[0-9]{11}/).max(11).required(),
    birthday: joi.date().required(),
    password: joi.string().required()
})