import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import BookMark from "@material-ui/icons/BookmarkBorder";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Pause from "@material-ui/icons/NotInterested";

import Typography from "@material-ui/core/Typography";

const calculateArticleAge = require("../Helpers/calculateArticleAge");

const styles = () => ({
  newsCard: {
    paddingBottom: 20,
  },
  newsCardImage: {
    paddingTop: "56.25%",
  },
  newsCardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  newsCardArticleAge: {
    marginTop: 12,
    fontSize: "0.875rem",
    textTransform: "uppercase",
    textAlign: "right",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  actions: {
    background: "linear-gradient(to bottom, #ffffff, #a8cbd7)",
  },
  actionOne: {
    background: "white",
  },
});

class NewsCard extends Component {
  state = {
    expanded: false,
  };

  handleExpandClick = () => {
    this.setState(state => ({
      expanded: !state.expanded,
    }));
  };

  render() {
    const { classes, article } = this.props;
    const newsCardArticleAge = calculateArticleAge(article.publishedAt);
    return (
      <Card className={classes.newsCard}>
        <CardMedia
          className={classes.newsCardImage}
          image={article.urlToImage}
          title={article.source.name}
        />
        <CardContent>
          <Typography className={classes.newsCardTitle}>
            {article.title}
          </Typography>
          <Typography className={classes.newsCardArticleAge}>
            {newsCardArticleAge}
          </Typography>
        </CardContent>
        <CardActions
          className={!this.state.expanded ? classes.actions : classes.actionOne}
        >
          <IconButton aria-label="Pause">
            <Pause />
          </IconButton>
          <IconButton aria-label="Bookmark">
            <BookMark />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>By {article.author}</Typography>
            <Typography paragraph>
              {article.content} <a href={article.url}>Read More</a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);
