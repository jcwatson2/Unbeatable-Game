import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
      players: [
        {
          type: 'Computer',
          game_piece: 'X',
          has_won: false
        },
        {
          type: 'Player',
          game_piece: 'O',
          has_won: false
        }
      ]
    }
    render() {
      return (
        <div className="App">
          <h1>App</h1>
        </div>
      );
    } 
}

export default App;
