import React from 'react';

const Post = ({ post }) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  const formattedDate = new Date(post.updatedAt).toLocaleDateString('en-US', options);

  return (
    <article>
      <h2 className='title'>{post.title}</h2>
      <div className="published-time">
        <i className='far fa-calendar purple-icon'></i>
        <span>{formattedDate}</span>
      </div>

      <div className='content' dangerouslySetInnerHTML={{ __html: post.content.html }} />
    </article>
  );
}

export default Post;