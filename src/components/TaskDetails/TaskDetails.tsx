import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../../context/TaskContext";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {
  CategoryTask,
  StatusTask,
  PriorityTask,
  type Task,
} from "../../types/TaskTypes";

export default function TaskDetails() {
  const { id } = useParams();

  const { tasks, updateTask } = useTasks();
  const task = tasks.find((t) => t.id === id);

  const [category, setCategory] = React.useState(task?.category || "");
  const [status, setStatus] = React.useState(task?.status || "");
  const [priority, setPriority] = React.useState(task?.priority || "");
  const [title, setTitle] = React.useState(task?.title || "");
  const [description, setDescription] = React.useState(task?.description || "");

  const navigate = useNavigate();

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ title, description, category, status, priority });
  };

  const handleExit = () => {
    navigate(`/`);
  };

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !title.trim() ||
      !description.trim() ||
      !category ||
      !status ||
      !priority
    ) {
      alert("Пожалуйста, заполните все поля перед сохранением.");
      return;
    }

    if (!id || !task) {
      console.log("Таска не существует");
      return;
    }

    const updatedTask: Task = {
      id,
      title,
      description,
      category: category as CategoryTask,
      status: status as StatusTask,
      priority: priority as PriorityTask,
      createdAt: task.createdAt,
    };

    updateTask(id, updatedTask);
    navigate("/");
  };

  if (!task) {
    return (
      <Container>
        <Typography variant="h6">Задача не найдена</Typography>
        <Button onClick={() => navigate("/")}>На главную</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          background: "#ffffff",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          ✏️ Редактирование задачи
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid size={12}>
              <TextField
                fullWidth
                id="task-title"
                label="Заголовок задачи"
                variant="outlined"
                value={title}
                onChange={handleTitleChange}
                required
              />
            </Grid>

            <Grid size={12}>
              <TextField
                fullWidth
                id="task-description"
                label="Описание задачи"
                multiline
                rows={6}
                variant="outlined"
                value={description}
                onChange={handleDescriptionChange}
                required
              />
            </Grid>
          </Grid>

          <Stack
            spacing={3}
            direction={{ xs: "column", sm: "row" }}
            sx={{ mt: 4 }}
          >
            <FormControl fullWidth>
              <InputLabel id="category-select-label">Категория</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                value={category}
                onChange={handleCategoryChange}
                label="Категория"
              >
                <MenuItem value={CategoryTask.BUG}>Bug</MenuItem>
                <MenuItem value={CategoryTask.FEATURE}>Feature</MenuItem>
                <MenuItem value={CategoryTask.DOCUMENTATION}>
                  Documentation
                </MenuItem>
                <MenuItem value={CategoryTask.REFACTOR}>Refactor</MenuItem>
                <MenuItem value={CategoryTask.TEST}>Test</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="status-select-label">Статус</InputLabel>
              <Select
                labelId="status-select-label"
                id="status-select"
                value={status}
                onChange={handleStatusChange}
                label="Статус"
              >
                <MenuItem value={StatusTask.TO_DO}>To Do</MenuItem>
                <MenuItem value={StatusTask.IN_PROGRESS}>In Progress</MenuItem>
                <MenuItem value={StatusTask.DONE}>Done</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="priority-select-label">Приоритет</InputLabel>
              <Select
                labelId="priority-select-label"
                id="priority-select"
                value={priority}
                onChange={handlePriorityChange}
                label="Приоритет"
              >
                <MenuItem value={PriorityTask.LOW}>Low</MenuItem>
                <MenuItem value={PriorityTask.MEDIUM}>Medium</MenuItem>
                <MenuItem value={PriorityTask.HIGH}>High</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 5,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              onClick={handleSave}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#1565c0",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              Сохранить
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={handleExit}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              Отменить
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
