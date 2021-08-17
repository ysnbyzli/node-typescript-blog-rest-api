import { Router } from "express";
import { createUserHandler, getUserHandler } from './../controllers/user.controller';

const useRouter = Router();

// Route to create a user
useRouter.post('/', createUserHandler);

// Route to fetch a user
useRouter.get('/:id', getUserHandler);

export default useRouter;
