import { createContext, useCallback, useEffect, useReducer, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
})

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => post.id !== action.payload.postId)
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList]
  } 
  return newPostList
}

const PostListProvider = ({children}) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, [])
  const [fetching, setFetching] = useState(false)

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: 'ADD_INITIAL_POSTS',
      payload: {
        posts
      }
    })
  }

  const addPost = (post) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: post
    })
  }

  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        postId
      }
    })
  }, [dispatchPostList])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    setFetching(true)
    fetch('https://dummyjson.com/posts', {signal})
    .then(res => res.json())
    .then(data => {
      addInitialPosts(data.posts)
      setFetching(false)
    })

    return () => {
      controller.abort( )
    }
  }, [])

  return (
    <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  )
}

export default PostListProvider