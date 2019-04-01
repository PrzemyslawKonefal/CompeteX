import React from 'react';
import PropTypes from 'prop-types';
import { Select, InputLabel, FormControl } from '@material-ui/core';

/**
 * @Button triggering the tournament slider
 *
 * @param {boolean} open - arrow direction
 * @param {function} buttonClick - function that handles button click
 * @param {boolean} hidden - button visibility
 */

const Dropdown = props => {
  const options = props.options.map(option => (
    <option value={option} key={option}>{option}</option>
  ));
  console.log(options, props.options)
  return (
    <FormControl>
      <InputLabel htmlFor="age-native-simple">Age</InputLabel>
      <Select
        native
        value={props.value}
        onChange={props.change}
        inputProps={{
          name: 'age',
          id: 'age-native-simple',
        }}
      >
        {options}
      </Select>

    </FormControl>
  );
};

Dropdown.propTypes = {
};

export default Dropdown;
