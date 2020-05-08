import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

import image from "../images/perch.png";

const styles = () => ({
  noResults: {
    background: "linear-gradient(to bottom, #ffffff, #def4f4)",
    paddingTop: 10,
    paddingRight: 16,
    paddingLeft: 16,
    height: `calc(100vh - 128px)` /* Account for search bar and footer */,
  },
  noResultsHeader: {
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  noResultsIntro: {
    paddingTop: 24,
    paddingBottom: 8,
    fontSize: "1.125rem",
    fontWeight: "bold",
  },
  noResultsText: {
    fontSize: "1.125rem",
  },
  noResultsSearchQuery: {
    color: "#466264",
    fontWeight: "bold",
  },
  noResultsImage: {
    display: "block",
    maxWidth: "100%",
    width: 224,
    paddingTop: 32,
    paddingBottom: 32,
    margin: "0 auto",
  },
});

class NoResults extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.noResults}>
        <Typography variant="h1" className={classes.noResultsHeader}>
          No Results
        </Typography>
        <Typography className={classes.noResultsIntro}>
          No results found for "{this.props.query}"
        </Typography>
        <Typography className={classes.noResultsText}>
          Try searching something else such as
          <span className={classes.noResultsSearchQuery}>
            {" "}
            US 2020 Election
          </span>{" "}
          or
          <span className={classes.noResultsSearchQuery}> Cute Dog Videos</span>
        </Typography>
        <img className={classes.noResultsImage} src={image} alt="" />
      </div>
    );
  }
}

NoResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoResults);
