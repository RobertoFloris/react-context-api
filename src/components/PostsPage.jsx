import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import PostsList from "./PostsList"

const PostsPage = () => {

  const [posts, fetchPosts] = useGlobalContext()

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <div className="container text-center">
        <h1>LISTA PRODOTTI</h1>
      </div>
      <div className="container">
        <ul>
          {posts.map(post => (
            <PostsList key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </>

  )
}

export default PostsPage