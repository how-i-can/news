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
  },
  chip: {
    marginRight: 8,
    fontSize: "1rem",
  },
});

class CategoryFilter extends Component {
  handleClick = category => {
    console.log(category);
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
      </div>
    );
  }
}

export default withStyles(styles)(CategoryFilter);
