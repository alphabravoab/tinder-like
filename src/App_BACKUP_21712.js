import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import { Route } from 'react-router-dom';

import MainscreenContainer from './components/mainscreen/MainscreenContainer';
=======
import Test from './components/Test' //just to test if the actions/reducers work
>>>>>>> 8e7fc39facafddab9ff9cb5eb04185c691e1ba29

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <main>
          <Route exact path="/" component={ MainscreenContainer } />

        </main>
=======
        <Test />
>>>>>>> 8e7fc39facafddab9ff9cb5eb04185c691e1ba29
      </div>
    );
  }
}

export default App;
