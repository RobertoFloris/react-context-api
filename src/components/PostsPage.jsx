import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

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
      <div>

      </div>
    </>

  )
}

export default PostsPage