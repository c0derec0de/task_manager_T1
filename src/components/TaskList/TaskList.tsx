import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TaskItem from '../TaskItem/TaskItem';
import { useTasks } from '../../context/TaskContext';

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid 
        container 
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {tasks.map((task) => (
          <Grid 
            item 
            key={task.id} 
            xs={12} 
            sm={6} 
            md={4}
          >
            <TaskItem task={task}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}