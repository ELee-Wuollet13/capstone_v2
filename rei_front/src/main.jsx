import React from 'react';
import PropTypes from 'prop-types';



const searchSuitFormStyles = {
  color: 'Green',
  position: "asolute",
  marginTop: '100px',
  marginLeft: '42%'
}


function searchSuitForm(props) {
  let _id = null;

  function handleNewSuitIDGet(event) {
    event.preventDefault();
    props.onNewIDGet({ id: _id.value });
    _id.value = '';
  }

  return (

    <div style={searchSuitFormStyles}>
      <form onSubmit={searchSuitForm}>
        <input
          type='number'
          id='id'
          placeholder='ID'
          ref={(input) => {_id = input;}}/>
        <button type="submit">Get By Id</button>
      </form>
    </div>
  )
}
export default searchSuitForm;
