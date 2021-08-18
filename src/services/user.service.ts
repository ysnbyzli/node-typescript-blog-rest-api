import convertor from "../convertor/user.convertor";
import { UserExistsException } from "../exceptions";

import UserModel, { IUserDB } from "../models/user.model";
import { User, UserCreateInput } from "../types/user.type";

// Create a user in the database convert the result to the User type and send it back to the controller
export const createUser = async (userInput: UserCreateInput) : Promise<User> => {

    const isUserExists = await UserModel.exists({email: userInput.email})

    if (isUserExists) {
        throw new UserExistsException(userInput.email);
    }

    const user: IUserDB = await UserModel.create(userInput);
    
    return convertor(user);
}

// Fetch a user from database convert it to the User type and send it back to the controller
export const getUser = async(id: string) : Promise<User | null> => {

    const user: IUserDB | null = await UserModel.findById(id);

    if(!user){
        
        return null;
    }
    
    return convertor(user);
}
