import React, { Component } from 'react';
import PageContainer from '../containers/PageContainer';
import UserContainer from '../containers/UserContainer';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
          <UserContainer />
        </header>
        <PageContainer />
      </div>
    );
  }
}

export default App;
