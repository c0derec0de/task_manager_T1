import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CategoryTask, StatusTask, PriorityTask } from '../../types/TaskTypes';


export default function TaskDetails() {
  const [category, setCategory] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

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

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ title, description, category, status, priority });
  };

  return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Редактирование задачи
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={4}>
                
            <TextField
                  fullWidth
                  id="task-title"
                  label="Заголовок задачи"
                  variant="outlined"
                  value={title}
                  onChange={handleTitleChange}
                  required
                  sx={{ mb: 3 }}
                />
                
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
            
                <Stack spacing={3}>
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
                      <MenuItem value={CategoryTask.DOCUMENTATION}>Documentation</MenuItem>
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
                      <MenuItem value={StatusTask.TO_DO}>To do</MenuItem>
                      <MenuItem value={StatusTask.IN_PROGRESS}>In progress</MenuItem>
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
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
              <Button 
                variant="contained" 
                color="primary" 
                type="submit"
                size="large"
                sx={{ mr: 2 }}
              >
                Сохранить
              </Button>
              <Button 
                variant="outlined" 
                color="secondary"
                size="large"
              >
                Отменить
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
  );
}