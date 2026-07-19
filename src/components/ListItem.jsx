function ListItem({
  task,
  onDeleteTask,
  onUpdateTask,
  onToggleTask,
}) {
  const handleEdit = () => {
    const newDescription = window.prompt(
      "Edit nama game:",
      task.description,
    );

    if (newDescription === null) {
      return;
    }

    onUpdateTask(task.id, newDescription);
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Hapus "${task.description}" dari wishlist?`,
    );

    if (confirmed) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div className="tugas">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />

      <p>{task.description}</p>

      <button type="button" onClick={handleEdit}>
        Edit
      </button>

      <button type="button" onClick={handleDelete}>
        Hapus
      </button>
    </div>
  );
}

export default ListItem;