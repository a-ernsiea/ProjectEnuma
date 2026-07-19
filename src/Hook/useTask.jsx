import { useEffect, useState } from "react";

const STORAGE_KEY = "tasks";

function getInitialTasks() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (!savedTasks) {
      return [];
    }

    const parsedTasks = JSON.parse(savedTasks);

    return Array.isArray(parsedTasks) ? parsedTasks : [];
  } catch (error) {
    console.error("Gagal membaca localStorage:", error);
    return [];
  }
}

function useTask() {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (description) => {
    const cleanDescription = description.trim();

    if (cleanDescription === "") {
      return false;
    }

    const newTask = {
      id: Date.now(),
      description: cleanDescription,
      completed: false,
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);

    return true;
  };

  const updateTask = (id, newDescription) => {
    const cleanDescription = newDescription.trim();

    if (cleanDescription === "") {
      return false;
    }

    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              description: cleanDescription,
            }
          : task,
      ),
    );

    return true;
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id),
    );
  };

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
  };
}

export default useTask;