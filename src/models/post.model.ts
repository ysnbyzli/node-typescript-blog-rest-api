import { Document, Model, model, PopulatedDoc, Schema } from "mongoose"
import { IUserDB } from "./user.model";


// Interface for blog database object
export interface IPostDB extends Document {
    title: string;
    content: string;
    author: PopulatedDoc<IUserDB & Document>;
    createdAt?: Date;
    updatedAt?: Date;
}

const PostSchema : Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {  // Post and user relationship
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const PostModel: Model<IPostDB | any> = model('post', PostSchema);

export default PostModel;