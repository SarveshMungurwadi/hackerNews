// src/components/PostDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Styles/PostDetail.css'

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://hn.algolia.com/api/v1/items/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

 
  return (
    <div className="post-container">
      {post ? (
        <div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-points">Points: {post.points}</p>
          <ul className="comments-list">
            {post.children.map((comment) => (
              <li key={comment.id} className="comment-item">
              <b>{comment.author}</b>{" :-"+comment.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetail;