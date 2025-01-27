import PostsPage from "./components/PostsPage"
import { GlobalProvider } from "./context/GlobalContext"

const App = () => {
  return (
    <GlobalProvider>
      <PostsPage />
    </GlobalProvider>
  )
}

export default App