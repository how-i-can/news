import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FilterListIcon from "@material-ui/icons/FilterList";

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

    "&:focus": {
      background: "#FED96E",
    },
  },
  filterIcon: {
    display: "flex",
    float: "right",
    paddingLeft: 10,
  },
});

class CategoryFilter extends Component {
  handleClick = category => {
    this.props.handleFilter(category);
  };

  render() {
    const { classes } = this.props;
    const categories = [
      "Business",
      "Entertainment",
      "General",
      "Health",
      "Science",
      "Sports",
      "Technology",
    ];
    return (
      <div className={classes.filter}>
        {categories.map((category, i) => (
          <Chip
            className={classes.chip}
            label={category}
            key={i}
            onClick={() => this.handleClick(category)}
          />
        ))}
        <div className={classes.filterIcon}>
          <FilterListIcon />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CategoryFilter);
