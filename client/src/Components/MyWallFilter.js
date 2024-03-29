import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const styles = () => ({
  filter: {
    display: "flex",
    padding: 16,
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    /* Adds padding to the last chip */
    "&::after": {
      content: "''",
      padding: 8 /* Half of parent container */,
    },
  },
  chip: {
    marginRight: 8,
    fontSize: "1rem",
    fontFamily: "Lato",

    "&:focus": {
      background: "#FED96E",
    },
  },
});

class MyWallFilter extends Component {
  render() {
    const { classes } = this.props;
    const categories = ["My Wall", "Favourites"];
    return (
      <div className={classes.filter}>
        {categories.map((category, i) => (
          <Chip className={classes.chip} label={category} key={i} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(MyWallFilter);
