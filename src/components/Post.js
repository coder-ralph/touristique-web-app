import React from 'react'

const Post = ({post}) => {
  return (
    <article>
      <h2 className='title'>{post.title}</h2>
      <div className="published-time">
        <i className='far fa-clock'></i>
        <span>{new Date(post.updatedAt).toDateString()}</span>
      </div>

      <div className='content' dangerouslySetInnerHTML={{__html: post.content.html}} />
    </article>
  )
}

export default Post
