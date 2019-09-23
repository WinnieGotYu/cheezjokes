import React, { PureComponent } from "react";
import "./App.css";
import Joke from "./Joke";
import axios from "axios";

class TenJokes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  async componentDidMount() {
    for (let i = 0; i < 10; i++) {
      const response = await axios.get("https://icanhazdadjoke.com/", {
         headers: { Accept: 'application/json' } 
        });
      const joke = response.data;
      this.setState(state => ({
        jokes: [...state.jokes, joke]
      }));
    }
  }

  upVote(id) {
    for (let joke of this.state.jokes) {
      if (joke.id === id) {
        if (joke.score === undefined) {
          joke.score = 1
        } else {
          joke.score = joke.score + 1
        }
      }
      let stateCopy = [...this.state.jokes]
      stateCopy.splice(this.state.jokes.indexOf(joke))
      this.setState(state => ({
        jokes: [...stateCopy, joke]
      }));
    }
  }

  downVote(id) {
    for (let joke of this.state.jokes) {
      if (joke.id === id) {
        if (joke.score === undefined) {
          joke.score = -1
        } else {
          joke.score = joke.score - 1
        }
      }
      let stateCopy = [...this.state.jokes]
      stateCopy.splice(this.state.jokes.indexOf(joke))
      this.setState(state => ({
        jokes: [...stateCopy, joke]
      }));
    }
  }

  render() {
    return (
      <div>
        {this.state.jokes.map(joke => (
          <Joke
            id={joke.id}
            key={joke.id}
            joke={joke.joke}
            upVote={this.upVote}
            downVote={this.downVote}
            score={joke.score}
          />
        ))}
      </div>
    );
  }
}

export default TenJokes;
