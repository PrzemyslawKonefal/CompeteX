import React from 'react';
import PropTypes from 'prop-types';
import { Select, InputLabel, FormControl, MuiThemeProvider } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/global-styles';

/**
 * @Button triggering the tournament slider
 *
 * @param {boolean} open - arrow direction
 * @param {function} buttonClick - function that handles button click
 * @param {boolean} hidden - button visibility
 */
const Label = styled(Select)`
  min-width: 180px;
  padding: 5px 15px;
  
  & > div {
    & > div {
      &:focus {
        background: inherit;
      }
    }
  }
  
  @media screen and (max-width: 478px) {
    min-width: 110px;
    padding: 5px 0;
  }
`;

const SingleSelect = props => {
  const options = props.options.map(option => (
    <MenuItem component="div" value={option} key={option}>
      {option}
    </MenuItem>
  ));
  const htmlLabel = `${props.label.replace(/\s/g, ' ')}`;
  return (
    <MuiThemeProvider theme={DefaultTheme}>
      <FormControl>
        <InputLabel htmlFor={htmlLabel}>{props.label}</InputLabel>
        <Label
          value={props.selected}
          onChange={props.change}
          inputProps={{
            name: props.label,
            id: htmlLabel,
          }}
        >
          {options}
        </Label>
      </FormControl>
    </MuiThemeProvider>
  );
};

SingleSelect.propTypes = {
};

export default SingleSelect;
