import React from 'react';
import { QUERY_ONE_POST } from '../Graphql/Queries';
import Post from '../components/Post';
import Comments from '../components/Comments';
import useQueryPosts from '../hooks/useQueryPosts';

const Article = () => {
  const { posts, error } = useQueryPosts({ query: QUERY_ONE_POST, limit: 5 });

  if (error) return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
  return (
    <div className='article-container'>
      {posts?.map(post => (
        <div key={post.id} className='post-container'>
          <div className='post-box'>
            <Post post={post} />
          </div>
          <div className='comments-box'>
            <Comments comments={post?.comments} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
