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

  shuffle = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp; 
    }
    return array;
  }

  select = (id) => {
    return 
  }

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
    console.log(id)
    if (character.click === false) {
      character.click = true;
      this.setState({score : this.state.score + 1}, function () {
        console.log(this.state.score);
      });
      this.shuffle(characters);
      return true;
    } else if (character.click === true) {
      this.endGame();
    }
  }

  render() {
    return (
      <Container>
        <Score score={this.state.score} topscore={this.state.topscore}>South Park Click Game</Score>
        {this.state.characters.map((character, index) => (
          <Character
            clickCount={this.clickCount}
            id={character.id}
            key={index}
            image={character.image}
            />
        ))}
      </Container>
    )
  }
}

export default App;
