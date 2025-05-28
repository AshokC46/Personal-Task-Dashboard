import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from '../redux/reducers/taskslice';
import {
  Container,
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskList() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.taskList);

  const handleAddTask = () => {
    if (!title.trim()) {
      setError('Task name is required');
      return;
    }

    if (title.trim().length < 3) {
      setError('Task name must be at least 3 characters');
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
    };

    dispatch(addTask(newTask));
    setTitle('');
    setError('');
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom>
        Task List
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          fullWidth
          label="Enter Task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
          error={Boolean(error)}
          helperText={error}
        />
        <Button
          variant="contained"
          onClick={handleAddTask}
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        >
          Add
        </Button>
      </Box>

      {tasks.map((task) => (
        <Card key={task.id} sx={{ mb: 2 }}>
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            <Typography sx={{ flexGrow: 1, wordBreak: 'break-word' }}>
              {task.title}
            </Typography>
            <IconButton onClick={() => handleDelete(task.id)} color="error" size="small">
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
