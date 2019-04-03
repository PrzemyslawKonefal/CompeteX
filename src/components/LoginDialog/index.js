import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  MuiThemeProvider,
  TextField,
  FormControlLabel,
  Checkbox,
  DialogActions,
  Button,
} from '@material-ui/core';
import { Star } from '@material-ui/icons'
import { DefaultTheme } from '../../styles/global-styles';
import { EMAIL_REGEX } from '../../helpers/constants';

export default function LoginDialog({
  onCancel, onConfirm, open, email, password, rememberMe, onChange, onInputBlur
}) {
  const errors = {
    email: !EMAIL_REGEX.test(email.value) && email.wasUnfocused,
    password: password.value.length < 8 && password.wasUnfocused
  };

  return (
    <MuiThemeProvider theme={DefaultTheme}>
      <Dialog onClose={onCancel} open={open} maxWidth="sm" fullWidth>
        <DialogTitle>Zaloguj się</DialogTitle>
        <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              value={email.value}
              onChange={({ target }) => onChange('email', target.value)}
              error={errors.email}
              onBlur={() => onInputBlur('email')}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              value={password.value}
              onChange={({ target }) => onChange('password', target.value)}
              error={errors.password}
              onBlur={() => onInputBlur('password')}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={() => onChange('rememberMe', !rememberMe)}
                  value="checkedA"
                  color="primary"
                />
              }
              label="Remember me"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onConfirm} color="primary" variant="contained">Sign in<Star/></Button>
        </DialogActions>
      </Dialog>
    </MuiThemeProvider>
  );
};

LoginDialog.propTypes = {
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onInputBlur: PropTypes.func,
  open: PropTypes.bool,
  email: PropTypes.object,
  password: PropTypes.object,
  rememberMe: PropTypes.bool
};
