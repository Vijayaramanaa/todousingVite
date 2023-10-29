import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Component/TodoList'
import Display from './Component/Display'

function App() {
  const [list,setList] = useState("")
  const [store,setStore] = useState([])

  return (
    <div className='appdiv'>
      <TodoList
      list = {list}
      setList = {setList}
      store = {store}
      setStore = {setStore}/>
      <Display 
      store = {store}
      setStore = {setStore} />
    </div>
  )
}

export default App
