import React from 'react'
import { QUERY_POSTS_BY_CATEGORY } from '../Graphql/Queries';
import Posts from '../components/Posts'
import NotFound from '../components/NotFound'
import useQueryPosts from '../hooks/useQueryPosts'

const PostsByCategory = () => {
  const { posts, error, status } = useQueryPosts({query: QUERY_POSTS_BY_CATEGORY, limit: 2});
  

  if(status === 'success' && posts.length === 0) return <NotFound />
  if(error) return <h2 style={{textAlign: 'center'}}>{error}</h2>;
  return (
    <React.Fragment>
      <Posts posts={posts} />
    </React.Fragment>
  )
}

export default PostsByCategory
