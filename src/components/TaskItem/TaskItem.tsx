import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Chip,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BugReportIcon from "@mui/icons-material/BugReport";
import BarChartIcon from "@mui/icons-material/BarChart";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ArticleIcon from "@mui/icons-material/Article";
import ConstructionIcon from "@mui/icons-material/Construction";
import ScienceIcon from "@mui/icons-material/Science";
import type { Task } from "../../types/TaskTypes";
import { useNavigate } from "react-router-dom";
import { CategoryTask } from "../../types/TaskTypes";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const navigate = useNavigate();

  const handleDetailsTask = () => {
    navigate(`/task/${task.id}`, { replace: false });
  };

  const categoryChipStyles = {
    [CategoryTask.BUG]: {
      icon: <BugReportIcon fontSize="small" />,
    },
    [CategoryTask.FEATURE]: {
      icon: <IntegrationInstructionsIcon fontSize="small" />,
    },
    [CategoryTask.DOCUMENTATION]: {
      icon: <ArticleIcon fontSize="small" />,
    },
    [CategoryTask.REFACTOR]: {
      icon: <ConstructionIcon fontSize="small" />,
    },
    [CategoryTask.TEST]: {
      icon: <ScienceIcon fontSize="small" />,
    },
  };
  
  return (
    <Card
      sx={{
        minWidth: 275,
        display: "flex",
        minHeight: 200,
        width: 400,
        flexDirection: "column",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Box display="flex" alignItems="center" mb={1}>
          <Typography variant="h5" component="div">
            {task.title}
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            sx={{
              color: "text.secondary",
              fontSize: 14,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {task.description}
          </Typography>

          <Stack direction="row" spacing={2} mt={2}>
            <Chip
              label={task.category}
              color="primary"
              icon={categoryChipStyles[task.category].icon}
            />
            <Chip
              label={task.status}
              color="secondary"
              icon={<AccessTimeIcon />}
            />
            <Chip
              label={task.priority}
              color="success"
              icon={<BarChartIcon />}
            />
          </Stack>
        </Box>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={handleDetailsTask}>
          Редактировать
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskItem;
