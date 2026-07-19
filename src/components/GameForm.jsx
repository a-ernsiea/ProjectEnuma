import { useState } from "react";

function GameForm({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const successfullyAdded = onAddTask(description);

    if (successfullyAdded) {
      setDescription("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Masukkan"
        value={description}
        onChange={(event) =>
          setDescription(event.target.value)
        }
      />

      <button type="submit">
        Tambah
      </button>
    </form>
  );
}

export default GameForm;