import { User } from "./user.type";

export type Post = {
    title: string,
    content: string,
    author: User,
    id: string,
}

export type PostCreateInput = {
    title: string,
    content: string,
    author: string
}

export type PostUpdateInput = {
    title?: string,
    content?: string,
    author?: string,
}

export type Pagination = {
    size: number,
    page: number
}