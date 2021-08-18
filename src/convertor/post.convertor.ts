import { IPostDB } from "../models/post.model";
import { Post } from "../types/post.type";
import convertorUser from './user.convertor'

export const convertor = (post: IPostDB) : Post => {
    return {
        id: post._id,
        content: post.content,
        title: post.title,
        author: convertorUser(post.author),
    }
}