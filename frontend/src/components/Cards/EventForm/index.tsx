import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import './index.css'; // Custom CSS for additional styling

interface EventFormState {
  title: string;
  description: string;
  date: string;
  time: string;
}

const EventRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<EventFormState>({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  // Handle input changes and update form state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event Registration Data:', formData);
  };

  return (
    <Container maxWidth="sm" className="event-form-container">
      <Typography variant="h4" align="center" gutterBottom>
        Event Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            fullWidth
            label="Title of Event"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description of Event"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            margin="normal"
            multiline
            rows={4}
          />
          <Box display="flex" gap={2}>
            <TextField
              fullWidth
              label="Date of Event"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              label="Time of Event"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </Box>
        <Box mt={4} display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" color="primary">
            Add Attendees
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default EventRegistrationForm;
