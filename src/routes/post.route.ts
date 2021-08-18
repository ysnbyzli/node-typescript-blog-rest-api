import { Router } from "express";
import { createPostHandler,  deletePostHandler,  getAllPostsHandler, getPostHandler, updatePostHandler } from "../controllers/post.controller";
import { validate } from "../middlewares";
import { createPostSchema, deletePostSchema, getPostSchema, updatePostSchema } from "../schemas/post.schema";

const postRouter = Router();

// Route to create a post
postRouter.post('/', validate(createPostSchema), createPostHandler);

//Route to fetch a post
postRouter.get('/:id', validate(getPostSchema), getPostHandler);

//Route to update a post
postRouter.patch('/:id', validate(updatePostSchema), updatePostHandler);

//Route to delete a post
postRouter.delete('/:id', validate(deletePostSchema), deletePostHandler);

//Route to get all the posts
postRouter.get('/', getAllPostsHandler)

export default postRouter;