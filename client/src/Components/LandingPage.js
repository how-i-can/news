import React, { Component } from "react";
import NavBar from "./NavBar";
import BottomNavBar from "./BottomNavBar";
import NewsCards from "./NewsCards";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  landingPage: {
    width: "100%"
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto",
    color: "#084D67"
  }
});

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      articles: []
    };
  }

  handleChange = (indexKey, data) => {
    this.setState({ [indexKey]: data });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.landingPage}>
        <NavBar />
        <h3 className={classes.title}>Top Stories</h3>
        <NewsCards
          handleChange={this.handleChange}
          articles={this.state.articles}
        />
        <BottomNavBar />
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
