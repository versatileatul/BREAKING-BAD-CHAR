import React,{useState,useEffect} from "react"
import './App.css'
import axios from "axios"
import Header from "./Component/Header"
import CharacterGrid from "./Component/characters/CharacterGrid"
import Search from "./Component/Search"

const App = () => {
  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [query,setQuery] = useState("")

  useEffect(()=>{
    const fetchItems = async () =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    
    }
    fetchItems()
  },[query])

  return (
    <div className="container">

    <Header/>
    <Search getQuery={(q) => setQuery(q)} />
    <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  )
}

export default App;