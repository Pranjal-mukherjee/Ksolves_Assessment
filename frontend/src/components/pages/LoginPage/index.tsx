import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import './index.css'; // Optional CSS for custom styles
import { emailRegex } from '../../utils/constants';

interface FormState {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState(false);

 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const isEmailValid = emailRegex.test(formData.email);
    const isPasswordValid = formData.password.length >= 6;
    setIsValid(isEmailValid && isPasswordValid);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="xs" className="login-container">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            error={formData.email !== '' && !emailRegex.test(formData.email)}
            helperText={
              formData.email !== '' && !emailRegex.test(formData.email)
                ? 'Please enter a valid email address'
                : ''
            }
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            error={formData.password !== '' && formData.password.length < 6}
            helperText={
              formData.password !== '' && formData.password.length < 6
                ? 'Password must be at least 6 characters'
                : ''
            }
          />
          <Box mt={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={!isValid}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
