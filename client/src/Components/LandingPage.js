import React, { Component } from "react";
import NavBar from "./NavBar";
import NewsCards from "./NewsCards";

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
        <NewsCards handleChange={this.handleChange} />
      </div>
    );
  }
}

export default LandingPage;
