import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogContentText, MuiThemeProvider, TextField, FormControlLabel, Checkbox, DialogActions, Button } from '@material-ui/core';
import { DefaultTheme } from '../../styles/global-styles';

export default function LoginDialog({onCancel, onConfirm, open, email, password, rememberMe, onChange}) {
    return (
      <MuiThemeProvider theme={DefaultTheme}>
        <Dialog onClose={onCancel} open={open} maxWidth="sm" fullWidth>
          <DialogTitle>Zaloguj się</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                value={email}
                onChange={({target}) => onChange('email', target.value)}
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={({target}) => onChange('password', target.value)}
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
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel} color="secondary">Cancel</Button>
            <Button onClick={onConfirm} color="primary">Sign in</Button>
          </DialogActions>
        </Dialog>
      </MuiThemeProvider>
    );
}

LoginDialog.propTypes = {
  user: PropTypes.object
};
