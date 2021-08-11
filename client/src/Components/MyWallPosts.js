import React, { Component } from "react";
import MyWall from "./MyWall";

class MyWallPosts extends Component {
  componentDidMount = () => {
    this.props.loadDefaultNewsArticles();
  };
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map((post, index) => (
          <MyWall post={post} key={index} />
        ))}
      </div>
    );
  }
}

export default MyWallPosts;
