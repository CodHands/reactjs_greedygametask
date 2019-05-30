import React from 'react';
import Data from './components';
import PropTypes from 'prop-types';
import withOfflineState from './hoc/withOfflineState'
import '@material/react-snackbar/dist/snackbar.css';


function App({ isOnline }) {
  return (
    <div className="App">
      {isOnline ?
        <div className="nav" title="You are currently online.">
          <span className="online-check"></span>
        </div> :
        <div className="nav" title="You are currently offline.">
          <span className="offline-check"></span>
        </div>}
      <Data />
    </div>
  );
}

App.propTypes = {
  isOnline: PropTypes.bool.isRequired,
};


export default withOfflineState(App);
