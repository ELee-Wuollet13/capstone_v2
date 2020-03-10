import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { nextLyric, restartSuit } from './../actions';

const SuitDisplay = ({ dispatch, suit }) => {
  const { title, artist, suitArray, arrayPosition, id } = suit;
  const currentLine = suitArray[arrayPosition];
  let action;
  return (
    <div>
      <h1>{title}</h1>
      <h4>{artist}</h4>
      <hr/>
      <div onClick={e => {
        e.preventDefault();
        if(!(arrayPosition === suitArray.length - 1)) {
          dispatch(nextLyric(id));
        } else {
          dispatch(restartSuit(id));
        }
      }}>
        <h1>
          {currentLine}
        </h1>
      </div>
    </div>
  );
};

SuitDisplay.propTypes = {
  id: PropTypes.number,

};

const mapStateToProps = state => {
  const suit = state.suitsById[state.currentSuitId];
  const suitInfo = {
    id: suit.suitId,
  };
  return {
    suit: suitInfo
  };
};

export default connect(mapStateToProps)(SuitDisplay);
