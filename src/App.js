import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component {

  constructor() {
    super();
    this.signs = ['rock', 'scissors', 'paper']
    this.state = {
      playerOne: 'rock',
      playerTwo: 'scissors',
    }
  }

  // methods Here
  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)],
    })
  }

  decideWinner = () => {
    const playerOne = this.state.playerOne, playerTwo = this.state.playerTwo;

    if (playerOne === playerTwo) {
      return "It's a tie!"
    } else if ((playerOne === "rock" && playerTwo === "scissors") || (playerOne === "scissors" && playerTwo === "paper") || (playerOne === "paper" && playerTwo === "rock")) {
      return "Player 1 Wins"
    } else {
      return "Player 2 Wins"
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          <PlayerCard sign={this.state.playerOne} />
          <PlayerCard sign={this.state.playerTwo} />
        </div>
        <div className="winner">{this.decideWinner()}</div>
        <button type="button" onClick={this.playGame}>Play Game</button>
      </div>
    )
  }
}

export default Game;
