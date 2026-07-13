import { useEffect, useState } from "react";

function useTask() { 
    const [tasks, setTasks] = useState("");

    useEffect( ()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
} , [tasks]);
    const addTask = (task)=>{
        const newTask = {
            id: +new Date(),
            description: task.trim(),
            status: "0"
        }
        setTasks((prevTasks) => [...prevTasks,newTasks])
};
    const deleteTask = ()=>{};
    const updateTask = ()=>{};

    return tasks, addTask ;

}

export default useGame;