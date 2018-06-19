import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MainscreenContainer from './components/mainscreen/MainscreenContainer';
import Test from './components/Test' //just to test if the actions/reducers work


class App extends Component {
  render() {
    return (
      <div className="App">

        <main>
          <Route exact path="/" component={ MainscreenContainer } />

        </main>


      </div>
    );
  }
}

export default App;
