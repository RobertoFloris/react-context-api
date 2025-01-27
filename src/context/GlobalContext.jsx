import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const apiUrl = "http://localhost:3000"

  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios.get(`${apiUrl}/posts`)
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
  }

  return (
    <GlobalContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }