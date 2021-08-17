import { User } from './../types/user.type';
import { createUser, getUser } from './../services/user.service';
import { Request, Response } from "express";


// Method to handle the user creation
export const createUserHandler = async (
    req: Request,
    res: Response
) : Promise<Response> => {
    const user: User = await createUser(req.body);
    return res.status(201).send(user);
}

// Method to handle user fetching
export const getUserHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const user: User | null = await getUser(req.params.id);
  
    if (user) {
      return res.status(200).send(user);
    }
    return res.status(404).send("User not found");
  };