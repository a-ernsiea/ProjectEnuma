import ListItem from './ListItem'

function GameList({
  tasks,
  onDeleteTask,
  onUpdateTask,
  onToggleTask,
}) {
  return (
    <>
      {Array.isArray(tasks) &&
        tasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
            onToggleTask={onToggleTask}
          />
        ))}
    </>
  )
}

export default GameList