import React from 'react';
import './Forgot.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ForgotPassword = ({ closeForgotPassword }) => {
  return (
    <div className="forgot-container">
      <Paper elevation={5} className="forgot-form">
        <div className="forgot-header">
          <Typography variant="h5" className="forgot-title">
            Reset Your Password
          </Typography>
          <IconButton onClick={closeForgotPassword} className="close-icon">
            <CloseIcon />
          </IconButton>
        </div>
        <Typography variant="subtitle1" className="forgot-subtitle">
          Enter your email to receive a password reset link
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
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            className="forgot-button"
          >
            Send Reset Link
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default ForgotPassword;
