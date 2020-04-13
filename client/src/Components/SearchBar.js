import React, { Component } from "react";

import PropTypes, { nominalTypeHack } from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import ClearIcon from "@material-ui/icons/Clear";
import { fade } from "@material-ui/core/styles/colorManipulator";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appBar: {
    display: "flex",
    backgroundColor: "white",
    color: "grey",
    boxShadow: "0.25"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    flex: 1
  },
  search: {
    display: "flex",
    justifyContent: "space-evenly",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
    pointerEvents: "none",
    alignItems: "center",
    flex: 1
  },
  inputRoot: {
    color: "inherit",
    flex: 1
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    // paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    },
    flex: 1
  }
});
class SearchBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      searchStringValue: ""
    };
  }

  handleInput = e => {
    this.setState({
      searchStringValue: e.target.value
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
        searchStringValue: ""
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
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            ></Typography>
            <div className={classes.search}>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                placeholder="What are you looking for?"
                onChange={this.handleInput}
                onKeyDown={this.handleSearch}
                value={this.state.searchStringValue}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon className={classes.searchIcon} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end" alignitems="right">
                    <IconButton
                      onClick={this.handleSearchClearClick}
                      aria-label="Clear"
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
