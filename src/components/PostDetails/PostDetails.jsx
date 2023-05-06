import React from 'react';
import './PostDetails.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div className='details'>
            <p>Detail for id : {post.id}</p>
            <h3>Post Details {post.title}</h3>
            <p>{post.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;