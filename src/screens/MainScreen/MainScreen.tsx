import React from "react";
import TaskList from "../../components/TaskList/TaskList";
import TaskDetails from "../../components/TaskDetails/TaskDetails";
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

const MainScreen = () => {
    const navigate = useNavigate();

    return (
        <div>
            <TaskList></TaskList>
            <TaskDetails/>
        </div>
    )
}

export default MainScreen;