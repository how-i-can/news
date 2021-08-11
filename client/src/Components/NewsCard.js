import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

import Typography from "@material-ui/core/Typography";

import defaultImage from ".././images/default-image.png";
import { FormHelperText } from "@material-ui/core";

const calculateArticleAge = require("../Helpers/calculateArticleAge");

const styles = () => ({
  newsCard: {
    borderRadius: 50,
    paddingBottom: 30,
    marginBottom: 30,
    background: `#FFFF`,
  },
  newsCardImage: {
    paddingTop: "56.25%",
  },
  newsCardTitle: {
    display: "inline-block",
    textAlign: "left",
    margin: 0,
    padding: 20,
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: "Lato",
  },
  newsCardArticle: {
    marginTop: 20,
    fontSize: "0.875rem",
    textTransform: "uppercase",
    fontFamily: "Lato",
  },
  newsCardArticleSourceName: {
    margin: 10,
    display: "inline-block",
    float: "left",
    fontWeight: "bold",
    fontFamily: "Lato",
  },
  newsCardArticleAge: {
    margin: 10,
    display: "inline-block",
    float: "left",
    fontFamily: "Lato",
  },
  newsCardContent: {
    fontSize: "1rem",
    fontFamily: "Lato",
  },
  newsCardActionButtons: {
    display: "flex",
    position: "relative",
    margin: "auto",
    float: "none",
    left: "15%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  actions: {
    background: "transparent",
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
        <div className={classes.newsCardArticle}>
          <Typography className={classes.newsCardArticleSourceName}>
            {article.source.name}
          </Typography>
          <Typography className={classes.newsCardArticleAge}>
            {newsCardArticleAge}
          </Typography>
        </div>
        <CardContent>
          <Typography className={classes.newsCardTitle}>
            {article.title}
          </Typography>
          <CardActions
            className={
              !this.state.expanded ? classes.actions : classes.actionOne
            }
          ></CardActions>
          <CardMedia
            className={classes.newsCardImage}
            image={article.urlToImage || defaultImage}
          />
        </CardContent>
        <br />
        <CardActions>
          <div className={classes.newsCardActionButtons}>
            <IconButton aria-label="share">
              <ShareOutlinedIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </div>
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
