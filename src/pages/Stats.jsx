import React from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

export default function Stats() {
  const tasks = useSelector((state) => state.tasks.taskList);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const data = tasks.map(task => ({
    name: task.title,
    minutes: Math.floor(task.timeSpent / 60),
  }));

  const totalTime = data.reduce((sum, task) => sum + task.minutes, 0);

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: 'auto',
        mt: 4,
        px: isMobile ? 2 : 0, 
      }}
    >
      <Typography variant="h4" gutterBottom>
        Productivity Stats
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Total time spent: {totalTime} minutes
      </Typography>

      
      <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
        <BarChart data={data} margin={{ left: 0, right: 30, top: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={isMobile ? 0 : 'preserveStartEnd'} 
            angle={isMobile ? -45 : 0} 
            textAnchor={isMobile ? 'end' : 'middle'}
            height={isMobile ? 60 : 30}
          />
          <YAxis
            label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }}
            allowDecimals={false}
          />
          <Tooltip />
          <Bar dataKey="minutes" fill={theme.palette.primary.main} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
