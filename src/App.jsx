import './App.css'
import GameList from './components/GameList'
import GameForm from './components/GameForm'
import useTask from './Hook/useTask'

function App() {
  const {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    toggleTask,
  } = useTask()

  return (
    <>
      <nav>Navbar</nav>

      <h1>List</h1>
      <p>Wishlist Game</p>

      <GameForm onAddTask={addTask} />

      <GameList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
        onToggleTask={toggleTask}
      />
    </>
  )
}

export default App