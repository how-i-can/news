import React, { Component } from "react";
import NewsCard from "./NewsCard";

class NewsCards extends Component {
  componentDidMount = () => {
    fetch("/news")
      .then(response => response.json())
      .then(response => {
        this.props.handleChange("articles", response);
      });
  };
  render() {
    return <NewsCard />;
  }
}

export default NewsCards;
