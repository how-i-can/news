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
    const { articles } = this.props;
    return (
      <div>
        {articles.map((article, index) => (
          <NewsCard article={article} key={index} />
        ))}
      </div>
    );
  }
}

export default NewsCards;
