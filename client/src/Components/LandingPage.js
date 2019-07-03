import React, { Component } from "react";
import NavBar from "./NavBar";
import NewsCards from "./NewsCards";
import SearchBar from "./SearchBar";
import axios from 'axios'

class LandingPage extends Component {
  state = {
      articles: [],
      query: '',
      searchResults: []
    }

  handleChange = (indexKey, data) => {
    this.setState({ [indexKey]: data });
  };

  getInfo = () => {
    const { query } = this.state;
    axios.post('/news/search', { query })
      .then(response => response.json())
      .then(response => {
        this.setState({
          results: response// News API returns an object named data,
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
      <div className="LandingPage">
        <NavBar />
        <NewsCards
          handleChange={this.handleChange}
          articles={this.state.articles}
        />
        <SearchBar
          handleInputChange={this.handleInputChange}
          searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default LandingPage;
