import React, { Component } from "react";
import NewsCard from "./NewsCard";

class NewsCards extends Component {
  componentDidMount = () => {
    this.props.loadDefaultNewsArticles();
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
