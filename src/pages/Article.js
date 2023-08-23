import React from 'react'
import { QUERY_ONE_POST } from '../Graphql/Queries';
import Post from '../components/Post';
import Comments from '../components/Comments';
import useQueryPosts from '../hooks/useQueryPosts'

const Article = () => {
  const { posts, error } = useQueryPosts({query: QUERY_ONE_POST, limit: 5});
  

  if(error) return <h2 style={{textAlign: 'center'}}>{error}</h2>;
  return (
    <div className='post-container'>
      {
        posts?.map(post => (
          <React.Fragment key={post.id}>
            <Post post={post} />
            <Comments comments={post?.comments} />
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default Article
