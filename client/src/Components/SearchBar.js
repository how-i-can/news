import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Suggestions from './Suggestions'

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'white',
    color: 'grey',
    boxShadow: "none"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
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
    width: theme.spacing.unit * 9,
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: 350
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
    }
  }
});
class SearchBar extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleInput = (e) => {
    this.props.handleInputChange(e.target.value)
  }

  render() {
    const { classes, queriedArticles } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          className={classes.appBar}
          position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
            </Typography>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <div className={classes.search}>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                placeholder="Search for..."
                onChange={this.handleInput}
              />
              <Suggestions queriedArticles={queriedArticles}/>
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

