import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate()
    const handleNavigation = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h3>{id}</h3>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link> &nbsp;
            <button onClick={handleNavigation}>With Button Handler</button>
            
        </div>
    );
};

export default Post;