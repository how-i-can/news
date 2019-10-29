import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button"
import ClearIcon from '@material-ui/icons/Clear';
import Suggestions from './Suggestions'

import InputAdornment from '@material-ui/core/InputAdornment';



const styles = theme => ({
  // root: {
  //   maxWidth: 400
  // },
  // grow: {
  //   flexGrow: 1
  // },


  appBar: {
    backgroundColor: 'white',
    color: 'grey',
    boxShadow: "0.25"
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
  // searchIcon: {
  //   width: theme.spacing.unit * 5,
  //   pointerEvents: "none",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },


  inputRoot: {
    color: "inherit",
    width: 350,
    display: 'flex',
    flexWrap: 'wrap',
  },

  // display: 'flex',
  //   flexWrap: 'wrap',

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
  },
  clearIcon: {
    width: theme.spacing.unit * 5,
    pointerEvents: "none",
    alignItems: "center",
    justifyContent: "center",
  },
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
    const { classes, queriedArticles, handleSearchClick } = this.props;
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

            <div className={classes.search}>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                placeholder="Search"
                onChange={this.handleInput}
              />


              <Suggestions queriedArticles={queriedArticles} handleSearchClick={handleSearchClick}/>
            </div>


            <div className={classes.grow} />
            <InputAdornment position="end">
            <ClearIcon />
          </InputAdornment>
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
