import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import { CategoryTask, StatusTask, PriorityTask } from "../../types/TaskTypes";

interface TaskFilterProps {
  onFilterChange: (filters: {
    category?: string;
    status?: string;
    priority?: string;
  }) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const [category, setCategory] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<string | null>(null);
  const [priority, setPriority] = React.useState<string | null>(null);

  const categoryOptions = Object.values(CategoryTask);
  const statusOptions = Object.values(StatusTask);
  const priorityOptions = Object.values(PriorityTask);

  const handleCategoryChange = (_: any, newValue: string | null) => {
    setCategory(newValue);
    onFilterChange({
      category: newValue || undefined,
      status: status || undefined,
      priority: priority || undefined,
    });
  };

  const handleStatusChange = (_: any, newValue: string | null) => {
    setStatus(newValue);
    onFilterChange({
      category: category || undefined,
      status: newValue || undefined,
      priority: priority || undefined,
    });
  };

  const handlePriorityChange = (_: any, newValue: string | null) => {
    setPriority(newValue);
    onFilterChange({
      category: category || undefined,
      status: status || undefined,
      priority: newValue || undefined,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        padding: 2,
        borderRadius: 2,
        backgroundColor: "#f5f5f5",
        boxShadow: 1,
        flexWrap: "wrap",
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      <Autocomplete
        sx={{ minWidth: 200, flex: 1 }}
        options={categoryOptions}
        value={category}
        onChange={handleCategoryChange}
        renderInput={(params) => (
          <TextField {...params} label="Категория" variant="outlined" />
        )}
      />
      <Autocomplete
        sx={{ minWidth: 200, flex: 1 }}
        options={statusOptions}
        value={status}
        onChange={handleStatusChange}
        renderInput={(params) => (
          <TextField {...params} label="Статус" variant="outlined" />
        )}
      />
      <Autocomplete
        sx={{ minWidth: 200, flex: 1 }}
        options={priorityOptions}
        value={priority}
        onChange={handlePriorityChange}
        renderInput={(params) => (
          <TextField {...params} label="Приоритет" variant="outlined" />
        )}
      />
    </Box>
  );
};

export default TaskFilter;
