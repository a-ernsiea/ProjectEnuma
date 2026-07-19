import { useEffect, useState } from 'react'

const initialTasks = [
  {
    id: 1,
    description: 'Game 1',
    status: false,
  },
  {
    id: 2,
    description: 'Game 2',
    status: false,
  },
  {
    id: 3,
    description: 'Game 3',
    status: false,
  },
  {
    id: 4,
    description: 'Game 4',
    status: false,
  },
  {
    id: 5,
    description: 'Game 5',
    status: false,
  },
]

function useTask() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem('tasks')

      if (!savedTasks) {
        return initialTasks
      }

      const parsedTasks = JSON.parse(savedTasks)

      return Array.isArray(parsedTasks)
        ? parsedTasks
        : initialTasks
    } catch (error) {
      console.error('Gagal membaca localStorage:', error)
      return initialTasks
    }
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (description) => {
    const cleanDescription = description.trim()

    if (!cleanDescription) {
      return
    }

    const newTask = {
      id: Date.now(),
      description: cleanDescription,
      status: false,
    }

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ])
  }

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id),
    )
  }

  const updateTask = (taskId, newDescription) => {
    const cleanDescription = newDescription.trim()

    if (!cleanDescription) {
      return
    }

    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              description: cleanDescription,
            }
          : task,
      ),
    )
  }

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: !task.status,
            }
          : task,
      ),
    )
  }

  return {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    toggleTask,
  };
}

export default useTask