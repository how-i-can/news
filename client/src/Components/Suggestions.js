import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  searchList: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(white, #e0eff9)",
    color: "black",
    fontFamily: "Roboto",
  },
  header: {
    paddingLeft: "1em",
  },
  listItem: {
    flex: 1,
    fontWeight: 350,
  },
  queryResult: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  queryLabel: {
    flex: 4,
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
    marginRight: "0.5em",
    pointerEvents: "none",
    flex: 0.1,
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
          <div className={classes.queryResult} key={article.url}>
            <ListItem
              className={classes.queryLabel}
              key={article.url}
              button
              onClick={e => this.handleClick(e, article)}
            >
              <SearchIcon className={classes.searchIcon} />
              <div
                className={classes.listItem}
                dangerouslySetInnerHTML={text}
              />
            </ListItem>
          </div>
        );
      });
      return (
        <div className={classes.searchList}>
          <h3 className={classes.header}>Results</h3>
          <List component="nav" aria-label="main mailbox folders">
            {options}
          </List>
        </div>
      );
    }

    return null;
  }
}

export default withStyles(styles)(Suggestions);
