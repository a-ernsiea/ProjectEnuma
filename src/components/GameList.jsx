import ListItem from "./ListItem";

function GameList({
  tasks,
  onUpdateTask,
  onDeleteTask,
  onToggleTask,
}) {
  return (
    <>
      {Array.isArray(tasks) &&
        tasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
    </>
  );
}

export default GameList;