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
import TimeAgo from "@material-ui/icons/AccessTime";

import Typography from "@material-ui/core/Typography";

const calculateArticleAge = require("../helpers/calculateArticleAge");

const styles = theme => ({
  card: {
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  title: {
    color: "textPrimary",
    fontFamily: "Avenir",
    fontSize: 16,
    fontWeight: "bold",
  },
  articleAgeWrapper: {
    paddingTop: 0,
    display: "flex",
    alignItems: "center",
  },
  clockIcon: {
    fontFamily: "Avenir",
    fontSize: 18,
    marginRight: 4,
  },
  articleAge: {
    fontFamily: "Avenir",
    fontSize: 14,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
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
    const articleAge = calculateArticleAge(article.publishedAt);
    return (
      <div className={classes.newsCard}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={article.urlToImage}
            title={article.source.name}
          />
          <CardContent>
            <Typography className={classes.title}>{article.title}</Typography>
          </CardContent>
          <CardContent className={classes.articleAgeWrapper}>
            <TimeAgo className={classes.clockIcon} />
            <Typography className={classes.articleAge}>{articleAge}</Typography>
          </CardContent>
          <CardActions
            className={
              !this.state.expanded ? classes.actions : classes.actionOne
            }
          >
            <IconButton aria-label="pause">
              <Pause />
            </IconButton>
            <IconButton aria-label="bookmark">
              <BookMark />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="show more"
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
      </div>
    );
  }
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);
