import React, { Component } from "react";
import NewsCard from "./NewsCard";

class NewsCards extends Component {
  componentDidMount = async () => {
    const response = await fetch("/news");
    const json = response.json();
    await this.props.handleChange("articles", json);
  };
  render() {
    return <NewsCard />;
  }
}

export default NewsCards;
