import React from 'react';
import './Login.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Login = ({ closeLogin, openSignup, openForgotPassword }) => {
  return (
    <div className="login-container">
      <Paper elevation={5} className="login-form">
        <div className="login-header">
          <Typography variant="h5" className="login-title">
            Welcome Back!
          </Typography>
          <IconButton onClick={closeLogin} className="close-icon">
            <CloseIcon />
          </IconButton>
        </div>
        <Typography variant="subtitle1" className="login-subtitle">
          Please log in to continue
        </Typography>
        <form className="form-fields">
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
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            className="login-button"
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" className="forgot-password">
          Forgot your password?{' '}
          <span
            onClick={() => {
              closeLogin();
              openForgotPassword();
            }}
            className="forgot-action"
          >
            Click here
          </span>
        </Typography>
        <Typography variant="body2" className="signup-link">
          Don't have an account?{' '}
          <span
            onClick={() => {
              closeLogin();
              openSignup();
            }}
            className="signup-action"
          >
            Sign up
          </span>
        </Typography>
      </Paper>
    </div>
  );
};

export default Login;
