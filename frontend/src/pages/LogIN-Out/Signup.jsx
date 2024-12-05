import React from 'react';
import './Signup.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Signup = ({ closeSignup, openLogin }) => {
  return (
    <div className="signup-container">
      <Paper elevation={5} className="signup-form">
        <div className="signup-header">
          <Typography variant="h5" className="signup-title">
            Create Your Account
          </Typography>
          <IconButton onClick={closeSignup} className="close-icon">
            <CloseIcon />
          </IconButton>
        </div>
        <Typography variant="subtitle1" className="signup-subtitle">
          Join us and explore exciting features!
        </Typography>
        <form className="form-fields">
          <TextField
            label="Full Name"
            type="text"
            fullWidth
            margin="normal"
            variant="outlined"
            className="input-field"
          />
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            className="input-field"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            className="input-field"
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            className="input-field"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            className="signup-button"
          >
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" className="already-member">
          Already have an account?{' '}
          <span
            onClick={() => {
              closeSignup();
              openLogin();
            }}
            className="login-action"
          >
            Log in
          </span>
        </Typography>
      </Paper>
    </div>
  );
};

export default Signup;
