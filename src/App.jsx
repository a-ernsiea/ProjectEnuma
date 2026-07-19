import "./App.css";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import useTask from "./Hook/useTask";

function App() {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
  } = useTask();

  return (
    <>
      <nav>Navbar</nav>

      <h1>List</h1>
      <p>Wishlist Game</p>

      <GameForm onAddTask={addTask} />

      <GameList
        tasks={tasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />
    </>
  );
}

export default App;