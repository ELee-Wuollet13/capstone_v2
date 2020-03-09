import React from 'react';
import { fetchSuitId } from './actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


function SuitSearch({ dispatch }){
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
      dispatch(fetchSuitId(input.value.trim()));
        input.value = '';
      }}>
        <input placeholder="Suit number" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
    </div>
  );
}
SuitSearch.propTypes = {
  dispatch: PropTypes.func
};
export default connect()(SuitSearch);




// const searchSuitFormStyles = {
//   color: 'Green',
//   position: "asolute",
//   marginTop: '100px',
//   marginLeft: '42%'
// }
//
//
// function searchSuitForm(props) {
//   let _id = null;
//
//   function handleNewSuitIDGet(event) {
//     event.preventDefault();
//     props.onNewIDGet({ id: _id.value });
//     _id.value = '';
//   }
//
//   return (
//
//     <div style={searchSuitFormStyles}>
//       <form onSubmit={searchSuitForm}>
//         <input
//           type='number'
//           id='id'
//           placeholder='ID'
//           ref={(input) => {_id = input;}}/>
//         <button type="submit">Get By Id</button>
//       </form>
//     </div>
//   )
// }
// export default searchSuitForm;
