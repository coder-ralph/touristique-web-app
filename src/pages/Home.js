import React from 'react'
import Posts from '../components/Posts'
import NotFound from '../components/NotFound'

import { QUERY_POSTS } from '../Graphql/Queries'
import useQueryPosts from '../hooks/useQueryPosts'


const Home = () => {
  const { posts, error, status } = useQueryPosts({query: QUERY_POSTS}) // Default limit = 6
  

  if(status === 'success' && posts.length === 0) return <NotFound />
  if(error) return <h2 style={{textAlign: 'center'}}>{error}</h2>;
  return (
    <React.Fragment>
      <Posts posts={posts} />
    </React.Fragment>
  )
}

export default Home
