import * as actionTypes from './actionTypes';

export const updateTournamentAttributeValue = (attributeName, newValue) => ({
    type: actionTypes.UPDATE_TOURNAMENT_ATTRIBUTE_VALUE,
    valueName: attributeName,
    value: newValue
});

export const removeParticipant = (participantId) => ({
    type: actionTypes.REMOVE_PARTICIPANT,
    id: participantId
});

export const addParticipant = (participantBody) => ({
    type: actionTypes.ADD_PARTICIPANT,
    participant: participantBody
});

export const resetForm = () => ({
    type: actionTypes.RESET_FORM
});

export const updateStatus = (status) => ({
    type: actionTypes.UPDATE_STATUS,
    succeed: status
});

export const createTournament = (tournamentForm) => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', { //by sending POST request here we will receive some dummy callback data to work with.
            method: 'post',
            body: JSON.stringify(tournamentForm)
        })
            .then((response) => {
                dispatch(resetForm());
                response.status === 201
                    ? dispatch(updateStatus("createSuccess"))
                    : dispatch(updateStatus("failure"));
            })
            .catch(() => {
                dispatch(updateStatus("failure"));
            })
    }
};

export const updateTournament = (tournamentForm) => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post', //gonna be put
            body: JSON.stringify(tournamentForm)
        })
            .then((response) => {
                response.status === 201
                    ? dispatch(updateStatus("updateSuccess"))
                    : dispatch(updateStatus("failure"));
            })
            .catch(() => {
                dispatch(updateStatus("failure"));
            })
    }
};

export const chooseGame = () => ({
    type: actionTypes.CHOOSE_GAME

})

export const searchGame = (value) => ({
    type: actionTypes.SEARCH_GAME,
    value

})
