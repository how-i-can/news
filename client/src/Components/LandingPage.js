import React, { Component } from "react";
import NewsCards from "./NewsCards";
import SearchBar from "./SearchBar";
import Suggestions from "./Suggestions";
import BottomNavBar from "./BottomNavBar";
import PropTypes from "prop-types";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import NoResults from "./NoResults";
import CategoryFilter from "./CategoryFilter";

const styles = theme => ({
  gridContainer: {
    display: "flex",
  },
  gridContainerSearch: {
    background: "none",
  },
  gridItem: {
    padding: "0px",
  },
  gridItemSearch: {
    padding: "0px",
  },
  landingPage: {
    flexGrow: 1,
    overflow: "hidden",
    alignItems: "center",
    background: "whitesmoke",
    maxWidth: 450,
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontFamily: "Source Sans Pro",
    color: "#084D67",
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing.unit}px auto`,
    padding: "0px",
  },
});

class LandingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      newsCardArticles: [],
      queryResultArticles: [],
      query: "",
      error: false,
      isLoading: false,
      loadSearchedQuery: false,
      searchResults: false,
    };
  }

  handleChange = (indexKey, data) => {
    this.setState({ [indexKey]: data });
  };

  getInfo = async () => {
    const { query } = this.state;
    await axios
      .post("/news/filter", { query })
      .then(response => {
        let res = response.data;
        if (res.length === 0 || res < 6) {
          this.setState({
            queryResultArticles: response.data,
            searchResults: true,
          });
        } else {
          res = res.slice(0, 5);
          this.setState({
            queryResultArticles: res,
            searchResults: false,
          });
        }
      })
      .catch(() => this.setState({ error: true }));
  };

  handleInputChange = queryVal => {
    const { query } = this.state;
    this.setState(
      {
        query: queryVal,
      },
      () => {
        if (this.state.query && this.state.query.length > 0) {
          this.getInfo();
        }
      }
    );
  };

  handleSearchClick = (e, article) => {
    e.preventDefault();
    this.clearSuggestions();
    this.setState({ newsCardArticles: [article] });
  };

  handleClearClick = (e, article) => {
    this.clearSuggestions();
  };

  clearSuggestions() {
    this.setState({ query: "", queryResultArticles: [] });
  }

  render() {
    const { classes } = this.props;
    const { query } = this.state;
    return (
      <div className={classes.landingPage}>
        <Paper className={classes.paper}>
          <Grid container className={classes.gridContainerSearch}>
            <Grid item xs className={classes.gridItemSearch}>
              <SearchBar
                handleClearClick={this.handleClearClick}
                handleInputChange={this.handleInputChange}
                query={query}
              />
              {query && (
                <Suggestions
                  queryResultArticles={this.state.queryResultArticles}
                  handleSearchClick={this.handleSearchClick}
                  query={query}
                />
              )}
              {this.state.searchResults && <NoResults />}
            </Grid>
          </Grid>
        </Paper>
        <CategoryFilter />
        <Paper className={classes.paper}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs className={classes.gridItem}>
              <NewsCards
                handleChange={this.handleChange}
                articles={this.state.newsCardArticles}
              />
            </Grid>
          </Grid>
        </Paper>
        <Grid container wrap="nowrap" className={classes.paper}>
          <Grid item xs>
            <BottomNavBar />
          </Grid>
        </Grid>
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
