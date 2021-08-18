import { convertor } from "../convertor/post.convertor";
import { NotFoundException } from "../exceptions";
import PostModel, { IPostDB } from "../models/post.model";
import UserModel from "../models/user.model";
import { Pagination, Post, PostCreateInput, PostUpdateInput } from "../types/post.type";

// Create a blog in the database convert the result to the Blog type and send it back to the controller
export const createPost = async (postInput: PostCreateInput): Promise<Post> => {

    const isAuthorExits = await UserModel.exists({ _id: postInput.author });

    if (!isAuthorExits) {
        throw new NotFoundException(`User with id ${postInput.author} not found`);
    }

    let post: IPostDB = await PostModel.create(postInput);
    post = await post.populate('author').execPopulate();

    return convertor(post);
}

// Fetch a post from database convert it to the post type and send it back to the controller
export const getPost = async (id: string): Promise<Post | null> => {
    const post: IPostDB | null = await PostModel.findById(id).populate('author');
    if (!post) {
        return null;
    }
    return convertor(post);
}

// Update a post from database convert it to the post type and send it back to the controller
export const updatePost = async (
    id: string,
    blogUpdate: PostUpdateInput
): Promise<Post> => {
    const updatedBlog: IPostDB | null = await PostModel.findByIdAndUpdate(
        id,
        blogUpdate,
        {
            new: true,
        }
    ).populate('author');
    if (!updatedBlog) {
        throw new NotFoundException(`Post with an id ${id} not found`);
    }
    return convertor(updatedBlog);
};


// Delete a blog from database convert
export const deletePost = async (
    id: string
) : Promise<boolean> => {

    const deletedPost: IPostDB | null = await PostModel.findByIdAndDelete(
        id
    ).populate('author');

    if (!deletedPost) {
        throw new NotFoundException(`Blog with an id ${id} not found`);
    }

    return true;
}

// Fetch all the blogs from database convert it to the Blog type and send it back to the controller
export const getAllPosts = async (
    pagination: Pagination
  ): Promise<Array<Post>> => {
    const blogs: Array<IPostDB> = await PostModel.find()
      .limit(pagination.size)
      .skip((pagination.page - 1) * pagination.size)
      .populate('author');
    return blogs.map((blog) => convertor(blog));
  };