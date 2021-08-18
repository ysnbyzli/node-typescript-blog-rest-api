import Joi from "joi";
import { RequestValidateSchema } from '../types/request.validate.schema.type'

export const createPostSchema: RequestValidateSchema = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        content: Joi.string().required(),
        author: Joi.string().hex().length(24).required(),
    }),
};

export const getPostSchema: RequestValidateSchema = {
    params: Joi.object().keys({
        id: Joi.string().hex().length(24).required(),
    }),
};

export const updatePostSchema: RequestValidateSchema = {
    body: Joi.object().keys({
        title: Joi.string(),
        content: Joi.string(),
        author: Joi.string().hex().length(24),
    }),
    params: Joi.object().keys({
        id: Joi.string().hex().length(24).required(),
    }),
};
export const deletePostSchema: RequestValidateSchema = {
    params: Joi.object().keys({
        id: Joi.string().hex().length(24).required(),
    }),
};