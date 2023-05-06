import React from 'react';
import Post from '../Post/Post';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts =useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>load posts: {posts.length}</h2>
            <div>
                {
                    posts.map(post=><Post
                    key={post.id}
                    post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;