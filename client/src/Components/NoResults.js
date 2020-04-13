import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import image from "../images/perch.png";

const styles = () => ({
  noResults: {
    background: "linear-gradient(to bottom, #ffffff, #def4f4)",
    fontFamily: "Source Sans Pro",
    paddingRight: "20px",
    paddingLeft: "20px",
    borderBottom: "2px",
  },
  intro: {
    fontWeight: "bold",
  },
  searchTerm: {
    color: "#466264",
    fontWeight: "bold",
  },
  image: {
    display: "block",
    maxWidth: "100%",
    width: "224px",
    paddingTop: "24px",
    paddingBottom: "32px",
    margin: "0 auto",
  },
});

class NoResults extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.noResults}>
        <h1>No Results</h1>
        <p className={classes.intro}>
          No results found for "{this.props.query}"
        </p>
        <p>
          Try searching something else such as
          <span className={classes.searchTerm}> US 2020 Election</span> or
          <span className={classes.searchTerm}> Cute Dog Videos</span>
        </p>
        <img className={classes.image} src={image} alt="" />
      </div>
    );
  }
}

NoResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoResults);
