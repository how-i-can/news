import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";

const styles = () => ({
  appBar: {
    backgroundColor: "white",
    color: "grey",
    // boxShadow: "none",
  },
  search: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  searchIcon: {
    marginRight: 18,
    pointerEvents: "none",
  },
  inputRoot: {
    color: "inherit",
    flex: 1,
  },
});

class SearchBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      searchStringValue: "",
    };
  }

  handleInput = e => {
    this.setState({
      searchStringValue: e.target.value,
    });
    this.props.handleInputChange(e.target.value);
  };

  handleSearch = e => {
    if (e.key === "Enter") {
      this.props.handleSearch(this.state.searchStringValue);
    }
  };

  handleSearchClearClick = e => {
    this.setState(
      {
        searchStringValue: "",
      },
      () => {
        this.props.handleClearClick();
      }
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                }}
                placeholder="What are you looking for?"
                onChange={this.handleInput}
                onKeyDown={this.handleSearch}
                value={this.state.searchStringValue}
              />
              <IconButton
                onClick={this.handleSearchClearClick}
                aria-label="clear"
              >
                <ClearIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
