import { createContext, useCallback, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {}
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

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: 'ADD_INITIAL_POSTS',
      payload: {
        posts
      }
    })
  }

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags
      }
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

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addInitialPosts }}>
      {children}
    </PostList.Provider>
  )
}

export default PostListProvider