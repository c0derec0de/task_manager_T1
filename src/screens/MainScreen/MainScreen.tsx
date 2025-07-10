import React from "react";
import TaskList from "../../components/TaskList/TaskList";
import TaskDetails from "../../components/TaskDetails/TaskDetails";

const MainScreen = () => {
    return (
        <div>
            <TaskList></TaskList>
            <TaskDetails/>
        </div>
    )
}

export default MainScreen;