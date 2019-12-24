import React, { Component } from "react";
import './App.css';
import characters from './characters.json'
import Character from './components/Character'
import Score from './components/Score'
import Container from './components/Container/Index'

class App extends Component {
  state = {
    characters, 
    score: 0,
    topscore: 0
  };

  endGame = () => {
    if(this.state.score > this.state.topscore) {
      this.setState({topscore: this.state.score}, function () {
        console.log("New Topscore: " + this.state.topscore);
      })
    }
    this.state.characters.forEach(character => {
      character.click = false; 
    })
    alert("Game Over")
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    const character = characters.find(el => el.id = id)
    console.log(character)
    if (character.click === false) {
      character.click = true;
      this.setState({score : this.state.score + 1}, function () {
        console.log(this.state.score);
      });
    } else {
      this.endGame();
    }
  }

  render() {
    return (
      <Container>
        <Score score={this.state.score} topscore={this.state.topscore}>South Park Click Game</Score>
        {this.state.characters.map((character, i) => (
          <Character
            clickCount={this.clickCount}
            id={character.id}
            key={i}
            image={character.image}
            />
        ))}
      </Container>
    )
  }
}

export default App;
