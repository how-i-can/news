import React, { Component } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

class Suggestions extends Component {
  handleClick = (e, article) => {
    this.props.handleSearchClick(e, article);
  };

  render() {
    if (this.props.queryResultArticles !== undefined) {
      const options = this.props.queryResultArticles.map(article => (
        <ListItem
          key={article.url}
          button
          onClick={e => this.handleClick(e, article)}
        >
          <ListItemText primary={article.title} />
        </ListItem>
      ));
      return (
        <div>
          <List component="nav" aria-label="main mailbox folders">
            {options}
          </List>
        </div>
      );
    }

    return null;
  }
}

export default Suggestions;
