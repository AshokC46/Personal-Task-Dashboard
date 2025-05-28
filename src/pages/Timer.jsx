import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTime } from '../redux/reducers/taskslice';
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Stack,
} from '@mui/material';

export default function Timer() {
  const tasks = useSelector((state) => state.tasks.taskList);
  const dispatch = useDispatch();

  const [activeTaskId, setActiveTaskId] = useState(null);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

 
  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const startTimer = (taskId) => {
    if (intervalId) clearInterval(intervalId);

    setActiveTaskId(taskId);
    setTimer(0);

    const id = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    if (activeTaskId !== null) {
      dispatch(addTime({ taskId: activeTaskId, seconds: timer }));
    }
    setActiveTaskId(null);
    setTimer(0);
    setIntervalId(null);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Time Tracker
      </Typography>

      <Stack spacing={2}>
        {tasks.map((task) => (
          <Card key={task.id} sx={{}}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: 2,
              }}
            >
              <Box>
                <Typography variant="h6" noWrap>
                  {task.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Time Spent: {task.timeSpent} seconds
                </Typography>
                {activeTaskId === task.id && (
                  <Typography color="secondary" sx={{ mt: 0.5 }}>
                    Tracking: {timer}s
                  </Typography>
                )}
              </Box>

              <Box>
                {activeTaskId === task.id ? (
                  <Button
                    onClick={stopTimer}
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{ minWidth: 120 }}
                  >
                    Stop
                  </Button>
                ) : (
                  <Button
                    onClick={() => startTimer(task.id)}
                    variant="contained"
                    disabled={activeTaskId !== null}
                    fullWidth
                    sx={{ minWidth: 120 }}
                  >
                    Start Timer
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
