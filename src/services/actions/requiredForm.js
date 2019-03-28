import * as actionTypes from './actionTypes';

export const inputDate = (value) => ({
    type: actionTypes.INPUT_DATE,
    value
});

export const validateDate = () => ({
    type: actionTypes.VALIDATE_DATE,
});

export const handleTextInput = (value, { field, limit }) => ({
    type: actionTypes.INPUT_TEXT,
    value,
    field,
    limit,
});

export const linkGenerate = () => ({
    type: actionTypes.LINK_GENERATE
});

export const addCity = (value) => ({
    type: actionTypes.ADD_CITY,
    value
});

export const showHideDropdown = () => ({
    type: actionTypes.SHOW_HIDE_DROPDOWN
});

