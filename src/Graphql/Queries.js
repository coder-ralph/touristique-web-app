import { GraphQLClient, gql } from 'graphql-request'

export const graphcms = new GraphQLClient(process.env.REACT_APP_API)

const category = `
  id,
  name,
  slug,
  color { css }
`

const commnet = `
  id,
  name,
  email,
  comment
`

const post = `
  id,
  title,
  slug,
  coverPhoto { url },
  content { html },
  description,
  createdAt,
  updatedAt
`


export const QUERY_SLUG_CATEGORIES = gql`
  {
    categories(){
      name,
      slug
    }
  }
`

export const QUERY_POSTS = gql`
  query GetPosts($limit: Int!, $skip: Int!) {
    posts(orderBy: updatedAt_DESC, first: $limit, skip: $skip){
      ${post}
      categories(){
        ${category}
      }
    }

    countConnection: postsConnection(stage: PUBLISHED) {
      aggregate {
        count
      }
    }
  }
`

export const QUERY_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($slug: String!, $limit: Int!, $skip: Int!) {
    posts(
      orderBy: updatedAt_DESC,
      first: $limit, 
      skip: $skip
      where: {categories_some: {slug: $slug}}
    ){
      ${post}
      categories(){
        ${category}
      }
    }

    countConnection: postsConnection(
      stage: PUBLISHED,
      where: {categories_some: {slug: $slug}}
    ) {
      aggregate {
        count
      }
    }
  }
`

export const QUERY_SEARCH_POSTS = gql`
  query GetSearchPosts($slug: String!, $limit: Int!, $skip: Int!) {
    posts(
      orderBy: updatedAt_DESC,
      first: $limit, 
      skip: $skip,
      where: {_search: $slug, AND: {slug_contains: $slug}}
    ){
      ${post}
      categories(){
        ${category}
      }
    }

    countConnection: postsConnection(
      stage: PUBLISHED,
      where: {_search: $slug, AND: {slug_contains: $slug}}
    ) {
      aggregate {
        count
      }
    }

  }
`

export const QUERY_ONE_POST = gql`
  query GetOnePost($slug: String, $limit: Int!, $skip: Int!) {
    posts(where: {slug: $slug}) {
      ${post}
      categories(){
        ${category}
      }
      comments(
        orderBy: updatedAt_DESC,
        first: $limit, 
        skip: $skip,
      ){
        ${commnet}
      }
    }

    countConnection: commentsConnection(
      stage: PUBLISHED, 
      where: {post: {slug: $slug}}
    ) {
      aggregate {
        count
      }
    }

  }
`