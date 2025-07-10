import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Stack } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function TaskItem() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Заголовок
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Описание
        </Typography>
        <Stack direction="row" spacing={1}>
            <Chip label="bug" color="primary" />
            <Chip label="to do" color="secondary" icon={<AccessTimeIcon />} />
            <Chip label="low" color="success" icon={<BarChartIcon />} />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Редактировать</Button>
      </CardActions>
    </Card>
  );
}
