import React, { Component } from "react";
import NewsCard from "./NewsCard";
import { withStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";

const styles = () => ({
  newsCards: {
    paddingLeft: 50,
    paddingRight: 50,
  },
});

class NewsCards extends Component {
  componentDidMount = () => {
    this.props.loadDefaultNewsArticles();
  };
  render() {
    const { classes, articles } = this.props;
    return (
      <div className={classes.newsCards}>
        {articles.map((article, index) => (
          <NewsCard article={article} key={index} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(NewsCards);
