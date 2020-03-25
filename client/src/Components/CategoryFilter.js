import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  filter: {
    display: "flex",
    paddingTop: "4px",
    paddingRight: "16px",
    paddingBottom: "4px",
    paddingLeft: "16px",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  chip: {
    marginRight: "6px",
  },
});

class CategoryFilter extends Component {
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
          <Chip className={classes.chip} label={category} key={i} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(CategoryFilter);
