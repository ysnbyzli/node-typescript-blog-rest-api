# Build a REST API with NodeJs, Express and MongoDB 
This project is a restfull api work where user and post requests on a basic 
blog site can be performed.

## Used Technologies

[![Nodejs Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/) 
[![Typescript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) 
[![Express Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) 
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) 

## API Usage
## *Users*
#### Create a new user

```http
  POST /api/v1/users
```

| Parameter | Type     | Explanation                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required** |
| `name`  | `string` | **Required** |

#### Fetch a user

```http
  GET /api/v1/users/:id
```

| Parameter | Type     | Explanation                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. The value of the item to be called |


## *Posts*
#### Create a new post
```http
  POST /api/v1/posts
```

| Parameter | Type     | Explanation                |
| :-------- | :------- | :------------------------- |
| `title`   | `string` | **Required** |
| `content` | `string` | **Required** |
| `author`  | `string` | **Required**. The id of the user who did the posting|

#### Fetch a post
```http
  GET /api/v1/posts/:id
```

| Parameter | Type     | Explanation                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Id of the post to be listed|

### Fetch all posts
```http
  PATCH /api/v1/posts
```

#### Update post
```http
  PATCH /api/v1/posts/:id
```

| Parameter | Type     | Explanation |
| :-------- | :------- | :---------- |
| `id`      | `string` | **Required**. The id of the post to be updated |
| `title`   | `string` |
| `content` | `string` |
| `author`  | `string` |

#### Delete post
```http
  DELETE /api/v1/posts/:id
```
| Parameter | Type     | Explanation |
| :-------- | :------- | :---------- |
| `id`      | `string` | **Required**. The id of the post to be removed |

