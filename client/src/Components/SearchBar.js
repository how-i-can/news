import React, { Component } from 'react'
import Suggestions from "./Suggestions"
//
// const { API_KEY } = process.env
// const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;


class Search extends Component {

  getInfo = () => {
    fetch(`https://newsapi.org/v2/top-headlines?q=${this.state.query}&apiKey={}`)
      .then(({ data }) => {
        this.setState({
          results: data.data // News API returns an object named data,
                             // as does axios. So... data.data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
    })
  }

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

