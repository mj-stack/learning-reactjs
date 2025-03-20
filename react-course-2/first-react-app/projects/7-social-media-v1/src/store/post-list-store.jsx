import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {}
})

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => post.id !== action.payload.postId)
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList]
  }
  return newPostList
}

const PostListProvider = ({children}) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST)

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
    console.log(userId, postTitle, postBody, reactions, tags);
  }

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        postId
      }
    })
  }

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  )
}

const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi Friends, I am going to Mumbai fro my vacations. Hope to enjoy a lot. Peace out.',
    reactions: 2,
    userId: 'user-9',
    tags: ['vacation', 'mumbai', 'enjoying']
  },
  {
    id: '2',
    title: 'Pass ho gya bhhai',
    body: '4 sall ki masti ke baad bhi ho gye hai pass. Hard to beleive',
    reactions: 15,
    userId: 'user-12',
    tags: ['graduating', 'unbelievable', 'studying']
  }
]

export default PostListProvider