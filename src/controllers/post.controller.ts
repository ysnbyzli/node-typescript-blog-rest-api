import { NextFunction, Request, Response } from "express";
import { createPost, deletePost, getAllPosts, getPost, updatePost } from "../services/post.service";
import { Post } from "../types/post.type";

const DEFAULT_PAGINATION_PAGE = 1;
const DEFAULT_PAGINATION_SIZE = 10;

// Method to handle the post creation
export const createPostHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {

    try {
        const post: Post = await createPost(req.body)
        return res.status(201).send(post)
    } catch (error) {
        next(error)
    }

}

// Method to handle post update
export const getPostHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const post: Post | null = await getPost(req.params.id);
        if (post) {
            return res.status(200).send(post)
        }
        return res.status(404).send();
    } catch (error) {
        next(error)
    }
}

// Method to handle post update
export const updatePostHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const blog: Post = await updatePost(req.params.id, req.body);
        return res.status(200).send(blog);
    } catch (error) {
        next(error);
    }
};

// Method to handle post deletion
export const deletePostHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = req.params.id;
        await deletePost(req.params.id);
        return res.status(204).send();
    } catch (error) {
        next(error);
    }
};


// Method to fetch all the blogs
export const getAllPostsHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const page =
            (req.query.page && parseInt(req.query.page.toString())) ||
            DEFAULT_PAGINATION_PAGE;
        const size =
            (req.query.size && parseInt(req.query.size.toString())) ||
            DEFAULT_PAGINATION_SIZE;

        const blogs: Array<Post> = await getAllPosts({ page, size });
        return res.status(200).send(blogs);
    } catch (error) {
        next(error);
    }
};