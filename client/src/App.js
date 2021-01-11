import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';


import "./App.css";

class App extends Component {
  render() {
   
    return (
      <div className="App" style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
        <nav>
          <h2>Smurf Village</h2>
        </nav>
        <main>
          <AddForm/>
          <SmurfDisplay/>
        </main>
      </div>
    );
  }
}

export default App;

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.