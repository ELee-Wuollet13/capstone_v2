import * as types from './../constants/actionTypes';
import v4 from 'uuid/v4';


export const findSuit = (newSelectedSuitId) => ({
  type: types.FIND_SUIT,
  newSelectedSuitId
});

export function fetchSuitId(input) {
  return function (dispatch) {
    const localSuitId = v4();
    dispatch(requestSuit(input, localSuitId));
    input = input.replace(' ', '_');
    return fetch('http://localhost:3000/wetsuits/' + input).then(
      response => response.json(),
      error => console.log('An error occurred.', error)

    ).then(function(json) {
      }
    );
  };
}

export const requestSuit = (title, localSuitId) => ({
  type: types.REQUEST_SUIT,
  title,
  songId: localSuitId
});
