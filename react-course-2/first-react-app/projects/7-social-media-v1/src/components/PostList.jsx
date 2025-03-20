import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import {PostList as PostListData} from "../store/post-list-store"
import WelcomMessage from "./WelcomeMessage"
import LoadingSpinner from "./LoadingSpinner"

const PostList = () => {
  const {postList, addInitialPosts} = useContext(PostListData)
  const [fetching, setFetching] = useState(false)

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
      console.log("Cleaning up use effect")
      controller.abort( )
    }
  }, [])

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