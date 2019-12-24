import React, { Component } from "react";
import './App.css';
import characters from './characters.json'
import Character from './components/Character'
import Score from './components/Score'
import Container from './components/Container'

class App extends Component {
  state = {
    characters, 
    score: 0,
    topscore: 0
  };

  render() {
    return (
      <Container>
        <Score score={this.state.score} topscore={this.state.topscore}>South Park Click Game</Score>
        {this.state.characters.map(character => (
          <Character
            clickCount={this.clickCount}
            id={character.id}
            key={character.id}
            image={character.image}
            />
        ))}
      </Container>
    )
  }
}

export default App;
