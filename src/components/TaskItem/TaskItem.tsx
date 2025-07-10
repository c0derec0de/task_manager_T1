import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Stack } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import type { Task } from '../../types/TaskTypes';

interface TaskItemProps {
    task: Task;
    onClick?: () => void;
  }

const TaskItem: React.FC<TaskItemProps> = ({
    task
  }) => {

    const handleDetailsTask = () => {

    }


  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {task.title}
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {task.description}
        </Typography>
        <Stack direction="row" spacing={1}>
            <Chip label={task.category} color="primary" />
            <Chip label={task.status} color="secondary" icon={<AccessTimeIcon />} />
            <Chip label={task.priority} color="success" icon={<BarChartIcon />} />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDetailsTask}>Редактировать</Button>
      </CardActions>
    </Card>
  );
}

export default TaskItem;