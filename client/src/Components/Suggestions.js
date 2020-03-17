import React, { Component } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  searchList: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(white, #e0eff9)",
    color: "black",
    fontFamily: "Roboto"
  },
  header: {
    paddingLeft: "1em"
  },
  listItem: {
    flex: 1,
    fontWeight: 350
  },
  queryResult: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  queryLabel: {
    flex: 4
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
    marginLeft: "0.5em",
    pointerEvents: "none",
    flex: 0.25
  }
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
            .join(`<b>${this.props.query.toLowerCase()}</b>`)
        };
        return (
          <div className={classes.queryResult}>
            <SearchIcon className={classes.searchIcon} />
            <ListItem
              className={classes.queryLabel}
              key={article.url}
              button
              onClick={e => this.handleClick(e, article)}
            >
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
