import React, { Component } from "react";
import MyWall from "./MyWall";
import { withStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";

const styles = () => ({
  myWallPosts: {
    paddingLeft: 50,
    paddingRight: 50,
  },
});

class MyWallPosts extends Component {
  componentDidMount = () => {
    this.props.loadDefaultNewsArticles();
  };
  render() {
    const { classes, posts } = this.props;
    return (
      <div className={classes.myWallPosts}>
        {posts.map((post, index) => (
          <MyWall post={post} key={index} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(MyWallPosts);
