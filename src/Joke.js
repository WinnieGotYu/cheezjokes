import React, { PureComponent } from "react";
import "./App.css";

class Joke extends PureComponent {
  constructor(props) {
    super(props);
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp(evt) {
    evt.preventDefault()
    this.props.upVote(this.props.id)
  }

  handleDown(evt) {
    evt.preventDefault()
    this.props.downVote(this.props.id)
  }

  render() {
    return (
      <div>
        {this.props.joke}
        <button onClick={this.handleUp}> VOTE UP </button>
        <button onClick={this.handleDown}> VOTE DOWN </button>
        <p>Score: {this.props.score}</p>
      </div>
    )
  }
}

export default Joke;
