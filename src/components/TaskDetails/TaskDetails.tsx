import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { Chip, Stack } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function TaskDetails() {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };
    return (
        <React.Fragment>
        <CssBaseline />
        <TextField
            helperText="Введите заголовок"
            id="demo-helper-title-aligned"
            label="Заголовок"
        />
        <TextField
            helperText="Введите описание"
            id="demo-helper-description-aligned"
            label="Описание"
        />

        <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Категория</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Категория"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={20}><Chip label="bug" color="info"/></MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
            </FormControl>
      </React.Fragment>
    )
}