import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'
import TodoList from './components/todoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductList />
      {/* <TodoList/> */}
    </>
  )
}

export default App
