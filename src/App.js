import React, { Component } from 'react';
import './App.css';
import GradeTable from './GradeTable';
import dataList from './poenggrenser-ntnu.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Poenggrenser</h2>
        </div>
        <GradeTable dataList={dataList} />
      </div>
    );
  }
}

export default App;
