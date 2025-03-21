import { useContext } from "react"
import Post from "./Post"
import {PostList as PostListData} from "../store/post-list-store"
import WelcomMessage from "./WelcomeMessage"
import LoadingSpinner from "./LoadingSpinner"

const PostList = () => {
  const {postList, fetching} = useContext(PostListData)

  return(
    <>
    {
      fetching && <LoadingSpinner />
    }
    {
      !fetching && postList.length === 0 && <WelcomMessage />
    }
    {
      !fetching && postList.map((post) => (
      <Post key={post.id} post={post} />
      ))
    }
    </>
  )
}

export default PostList