import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ListItem from './components/ListItem'
import GameList from './components/GameList'
import GameForm from './components/GameForm'

function App() {
  const [count, setCount] = useState(0)
  const {tasks, addTask} = useTask();

  return (
    <>
    <nav>
      Navbar
    </nav>

    <h1>List</h1>
    <p>Wishlist Game</p>

    <GameForm onAddTask={addTask}/>
    <GameList/>
    
    </>

  )
}
export default App