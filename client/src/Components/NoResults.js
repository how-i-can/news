import React, { Component } from "react";
import image from "../images/perch.png";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  noResults: {
    background: "linear-gradient(to bottom, #ffffff, #def4f4)",
    fontFamily: "Source Sans Pro",
    paddingRight: "20px",
    paddingLeft: "20px",
  },
  intro: {
    fontWeight: "bold",
  },
  searchTerm: {
    color: "#466264",
    textDecoration: "underline",
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
        <h1>Results</h1>
        <p className={classes.intro}>
          No results found for <search_term>"search term"</search_term>
        </p>
        <p>
          Try searching something else such as
          <search_term className={classes.searchTerm}>
            {" "}
            US 2020 Election
          </search_term>{" "}
          or
          <search_term className={classes.searchTerm}>
            {" "}
            Cute Dog Videos
          </search_term>
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
