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
        this.setState({ results: response })
      })
  }

  handleInputChange = () => {
    // this.setState({
    //   query: this.search.value
    // }, () => {
    //   if (this.state.query && this.state.query.length > 1) {
    //     if (this.state.query.length % 2 === 0) {
    //       this.getInfo()
    //     }
    //   }
    // })
  }

  render() {
    return (
      <div className="LandingPage">
      <SearchBar
          handleInputChange={this.handleInputChange}
          searchResults={this.state.searchResults} />
        {/* <NavBar query={this.props.query}/> */}
        <NewsCards
          handleChange={this.handleChange}
          articles={this.state.articles}
        />
      </div>
    );
  }
}

export default LandingPage;
