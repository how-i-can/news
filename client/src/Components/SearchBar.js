import React, { Component } from 'react'
import Suggestions from "./Suggestions"
//
// const { API_KEY } = process.env
// const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;


class Search extends Component {

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search

