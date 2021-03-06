import { RequestValidateSchema } from './../types/request.validate.schema.type';
import Joi from 'joi';



export const createUserSchema: RequestValidateSchema = {
    body: Joi.object().keys({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
    }),
};

export const getUserSchema: RequestValidateSchema = {
    params: Joi.object().keys({
        id: Joi.string().hex().length(24).required(),
    }),
};