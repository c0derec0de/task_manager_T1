import { createContext, useState, useContext } from "react"
import type { Task } from "../types/TaskTypes"


export const TaskContext = createContext({
    tasks: [] as Task[],
    addTask: (task: Task) => {},
    updateTask: (id: string, updatedTask: Task) => {},
    deleteTask: (id: string) => {},
});

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ( { children }: { children: React.ReactNode} ) => {
    const [tasks, setTasks] = useState<Task[]>([
        {
          id: '1',
          title: 'Исправить баг',
          description: 'Пользователи не могут удалить таск',
          category: 'bug',
          status: 'in progress',
          priority: 'high',
          createdAt: new Date()
        },
        {
          id: '2',
          title: 'Добавить смену тем',
          description: 'Реализовать переключение между светлой и темной темой',
          category: 'feature',
          status: 'to do',
          priority: 'medium',
          createdAt: new Date()
        }
      ]);

    return (
        <TaskContext.Provider
          value={{
            tasks,
            addTask: (task) => setTasks([...tasks, task]),
            updateTask: (id, updatedTask) => 
              setTasks(tasks.map(task => task.id === id ? updatedTask : task)),
            deleteTask: (id) => setTasks(tasks.filter(task => task.id !== id)),
          }}
        >
          {children}
        </TaskContext.Provider>
      );
    };