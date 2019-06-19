import React, { Component } from "react";
import NavBar from "./NavBar";
import NewsCards from "./NewsCards";
import SearchBar from "./SearchBar";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      articles: []
    };
  }

  handleChange = (indexKey, data) => {
    this.setState({ [indexKey]: data });
  };

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
          results={this.state.results} />
      </div>
    );
  }
}

export default LandingPage;
