import { useState } from "react";

function ListItem({
  task,
  onUpdateTask,
  onDeleteTask,
  onToggleTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(true);
    setEditValue(task.description);
  };

  const handleSave = () => {
    const success = onUpdateTask(task.id, editValue);

    if (success) {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(task.description);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className="tugas">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(event) =>
            setEditValue(event.target.value)
          }
        />
      ) : (
        <p>{task.description}</p>
      )}

      {isEditing ? (
        <>
          <button
            type="button"
            onClick={handleSave}
          >
            Simpan
          </button>

          <button
            type="button"
            onClick={handleCancel}
          >
            Batal
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={handleEdit}
          >
            Edit
          </button>

          <button
            type="button"
            onClick={handleDelete}
          >
            Hapus
          </button>
        </>
      )}
    </div>
  );
}

export default ListItem;