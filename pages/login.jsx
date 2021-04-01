import React from 'react';
import {
  Box, Button, Checkbox, FormControlLabel, TextField, Typography,
} from '@material-ui/core';
import LoginLayout from '../components/LoginLayout';

const Login = () => (
  <LoginLayout>
    <Box>
      <div>
        <Typography>
          Sign in with dtac member
        </Typography>
        <TextField
          label={<Typography variant="caption">Enter your dtac number</Typography>}
          type="tel"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <FormControlLabel
          value="keep"
          control={<Checkbox color="primary" />}
          label={<Typography variant="caption">Keep me sign in with this number</Typography>}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
        >
          Continue
        </Button>
      </div>
    </Box>
  </LoginLayout>
);

export default Login;
