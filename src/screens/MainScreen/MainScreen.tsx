import React from "react";
import TaskFilter from "../../components/TaskFilter/TaskFilter";
import TaskList from "../../components/TaskList/TaskList";
import { useTasks } from "../../context/TaskContext";
import "./MainScreen.css";

const MainScreen = () => {
  const { tasks } = useTasks();
  const [filteredTasks, setFilteredTasks] = React.useState(tasks);

  const handleFilterChange = (filters: {
    category?: string;
    status?: string;
    priority?: string;
  }) => {
    const filtered = tasks.filter((task) => {
      return (
        (!filters.category || task.category === filters.category) &&
        (!filters.status || task.status === filters.status) &&
        (!filters.priority || task.priority === filters.priority)
      );
    });
    setFilteredTasks(filtered);
  };

  return (
    <div className="main">
      <TaskFilter onFilterChange={handleFilterChange} />
      <div className="task-list-wrapper">
        {filteredTasks.length > 0 ? (
          <TaskList tasks={filteredTasks} />
        ) : (
          <div className="task-list-wrapper__not-exists">
            Задачи не найдены.
          </div>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
