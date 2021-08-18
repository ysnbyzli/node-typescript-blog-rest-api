import { createUserSchema, getUserSchema } from './../schemas/user.schema';
import { Router } from "express";
import { validate } from "../middlewares";
import { createUserHandler, getUserHandler } from './../controllers/user.controller';

const useRouter = Router();

// Route to create a user
useRouter.post('/', validate(createUserSchema), createUserHandler);

// Route to fetch a user
useRouter.get('/:id', validate(getUserSchema), getUserHandler);

export default useRouter;
