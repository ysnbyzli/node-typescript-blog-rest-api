import HttpException from "./http.exception";

class UserNotFoundException extends HttpException{

    constructor(id : string){
        super(404, `User not found by ${id}`);
    }

}

export default UserNotFoundException;