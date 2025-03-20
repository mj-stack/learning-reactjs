import { useContext } from "react"
import Post from "./Post"
import {PostList as PostListData} from "../store/post-list-store"
import WelcomMessage from "./WelcomeMessage"

const PostList = () => {
  const {postList, addInitialPosts} = useContext(PostListData)

  const onGetPostsClick = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addInitialPosts(data.posts)
    })
  }

  return(
    <>
    {
      postList.length === 0 && <WelcomMessage onGetPostsClick={onGetPostsClick} />
    }
    {
      postList.map((post) => (
      <Post key={post.id} post={post} />
      ))
    }
    </>
  )
}

export default PostList