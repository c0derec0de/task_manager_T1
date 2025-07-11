import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TaskItem from "../TaskItem/TaskItem";
import type { Task } from "../../types/TaskTypes";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const count = tasks.length;

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {tasks.map((task) => (
          <Grid
            key={task.id}
            size={{
              xs: count === 1 ? 12 : 12,
              sm: count === 1 ? 12 : 6,
              md: count === 1 ? 12 : 4,
            }}
            sx={{
              display: "flex",
            }}
          >
            <TaskItem task={task} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
