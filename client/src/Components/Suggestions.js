import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  list: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(white, #E0EFF9)",
  },
  listHeader: {
    paddingLeft: 16,
    fontSize: "1.125rem",
    fontWeight: "bold",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  listItemIcon: {
    marginRight: "1.125rem",
    pointerEvents: "none",
  },
  listItemText: {
    flex: 1,
    fontSize: "1rem",
  },
  listOptions: {
    backgroundColor: "white",
  },
});

class Suggestions extends Component {
  handleClick = (e, article) => {
    this.props.handleSearchClick(e, article);
  };

  render() {
    const { classes } = this.props;
    if (this.props.queryResultArticles !== undefined) {
      const options = this.props.queryResultArticles.map(article => {
        const text = {
          __html: article.title
            .toLowerCase()
            .split(this.props.query.toLowerCase())
            .join(`<b>${this.props.query.toLowerCase()}</b>`),
        };
        return (
          <ListItem
            className={classes.listItem}
            key={article.url}
            button
            onClick={e => this.handleClick(e, article)}
          >
            <SearchIcon className={classes.listItemIcon} />
            <Typography
              className={classes.listItemText}
              dangerouslySetInnerHTML={text}
            />
          </ListItem>
        );
      });
      return (
        <div className={classes.list}>
          <Typography className={classes.listHeader}>Results</Typography>
          <List
            component="nav"
            aria-label="search results"
            className={classes.listOptions}
          >
            {options}
          </List>
        </div>
      );
    }
    return null;
  }
}

export default withStyles(styles)(Suggestions);
