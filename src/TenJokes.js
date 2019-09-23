import React, { Component } from "react";
import "./App.css";
import Joke from "./Jokes";
import axios from "axios";

class TenJokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  async componentDidMount() {
    for (i = 0; i < 10; i++) {
      const response = await axios.get("https://icanhazdadjoke.com/");
      const joke = response.data;
      this.setState(state => ({
        jokes: [...state.jokes, joke]
      }));
    }
  }

  upVote(id) {}

  render() {
    return (
      <div>
        {this.state.jokes.map(joke => (
          <Card
            id={joke.id}
            key={joke.id}
            joke={joke.joke}
            upVote={this.upVote}
            downVote={this.downVote}
          />
        ))}
      </div>
    );
  }
}

export default TenJokes;
