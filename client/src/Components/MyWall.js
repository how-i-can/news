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
import BottomNavBar from "./BottomNavBar";

import Typography from "@material-ui/core/Typography";

import defaultImage from ".././images/default-image.png";

const calculateArticleAge = require("../Helpers/calculateArticleAge");

const styles = () => ({
  myWallPost: {
    borderRadius: 50,
    paddingBottom: 30,
    marginBottom: 30,
  },
  myWallPostImage: {
    paddingTop: "56.25%",
  },
  userNameTitle: {
    display: "block",
    margin: 0,
    padding: 20,
    fontSize: "1rem",
    fontWeight: "bold",
  },
  myWallPostArticleAge: {},
  myWallContent: {
    fontSize: "1rem",
  },
  myWallPostText: {
    fontFamily: "Lato",
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

class MyWall extends Component {
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
    const myWallPostArticleAge = calculateArticleAge;

    return (
      <Card className={classes.myWallPost}>
        <div className={classes.myWallPost}></div>
        <CardContent>
          <Typography className={classes.userNameTitle}>Cathy Zen</Typography>
        </CardContent>
        <br />
        <CardActions
          className={!this.state.expanded ? classes.actions : classes.actionOne}
        >
          <IconButton aria-label="share">
            <ShareOutlinedIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlinedIcon />
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
            <Typography paragraph className={classes.myWallPostText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum!
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

MyWall.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyWall);
