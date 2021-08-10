import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import BottomNavBar from "./BottomNavBar";
import CategoryFilter from "./CategoryFilter";
import NewsCards from "./NewsCards";
import NoResults from "./NoResults";
import Paper from "@material-ui/core/Paper";
import SearchBar from "./SearchBar";
import SearchIcon from "@material-ui/icons/Search";
import Suggestions from "./Suggestions";
import MenuIcon from "@material-ui/icons/Menu";

const styles = () => ({
  landingPage: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "0 auto",
    width: "100vw",
    padding: 0,
  },
  landingPageMain: {
    flexGrow: 1,
  },
  menuIcon: {
    float: "left",
    padding: 10,
  },
  pageTop: {
    display: "table",
    position: "relative",
    margin: "auto",
    float: "none",
    fontWeight: "bold",
  },
  searchIcon: {
    float: "right",
    marginTop: -100,
    paddingRight: 10,
  },
});

class LandingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      newsCardArticles: [],
      queryResultArticles: [],
      filterResultArticles: [],
      query: "",
      error: false,
      isLoading: false,
      loadSearchedQuery: false,
      hasSearchResults: false,
      showNoResultsCard: false,
    };
  }

  handleChange = (keyVal, data) => {
    this.setState({ [keyVal]: data });
  };

  handleFilter = category => {
    this.setState(
      {
        query: category,
      },
      () => {
        this.getFilterInfo();
      }
    );
  };

  getFilterInfo = async () => {
    const { query } = this.state;
    await axios
      .post("/news/search", { query })
      .then(response => {
        const results = response.data;
        if (results.length > 0) {
          this.setState({ newsCardArticles: results });
        } else {
          this.setState({ newsCardArticles: [] });
        }
      })
      .catch(() => this.setState({ error: true }));
  };

  getInfo = async () => {
    const { query } = this.state;
    await axios
      .post("/news/filter", { query })
      .then(response => {
        const results = response.data;
        if (results.length > 0) {
          this.setState({ hasSearchResults: true, showNoResultsCard: false });
          this.setState({ queryResultArticles: results.slice(0, 5) });
        } else {
          this.setState({ hasSearchResults: false, showNoResultsCard: true });
          this.setState({ queryResultArticles: [] });
        }
      })
      .catch(() => this.setState({ error: true }));
  };

  handleInputChange = queryVal => {
    this.setState(
      {
        query: queryVal,
      },
      () => {
        if (this.state.query && this.state.query.length > 0) {
          this.getInfo();
        } else {
          this.setState({ hasSearchResults: false });
          this.clearSuggestions();
        }
      }
    );
  };

  handleSearch = queryVal => {
    this.handleInputChange(queryVal);
    this.setState({ newsCardArticles: this.state.queryResultArticles });
  };

  handleSearchClick = (e, article) => {
    e.preventDefault();
    this.clearSuggestions();
    this.setState({ newsCardArticles: [article] });
  };

  handleClearClick = () => {
    this.clearSuggestions();
  };

  clearSuggestions = () => {
    this.setState({
      query: "",
      queryResultArticles: [],
      hasSearchResults: false,
      showNoResultsCard: false,
    });
  };

  loadDefaultNewsArticles = () => {
    fetch("/news")
      .then(response => response.json())
      .then(response => {
        this.handleChange("newsCardArticles", response);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.landingPage}>
        <div className={classes.landingPageMain}>
          <div className={classes.menuIcon}>
            <MenuIcon />
          </div>
          <div className={classes.pageTop}>
            <h1>Good News</h1>
            <h5>Good news from around the world.</h5>
          </div>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <SearchBar
            handleClearClick={this.handleClearClick}
            handleInputChange={this.handleInputChange}
            handleSearch={this.handleSearch}
            query={this.state.query}
          />
          {this.state.hasSearchResults && (
            <Suggestions
              queryResultArticles={this.state.queryResultArticles}
              handleSearchClick={this.handleSearchClick}
              query={this.state.query}
            />
          )}
          {!this.state.showNoResultsCard && !this.state.hasSearchResults && (
            <CategoryFilter handleFilter={this.handleFilter} />
          )}
          {this.state.showNoResultsCard && !this.state.hasSearchResults && (
            <NoResults query={this.state.query} />
          )}
          {!this.state.showNoResultsCard && !this.state.hasSearchResults && (
            <NewsCards
              handleChange={this.handleChange}
              loadDefaultNewsArticles={this.loadDefaultNewsArticles}
              articles={this.state.newsCardArticles}
            />
          )}
        </div>
        <BottomNavBar
          className={classes.BottomNavBar}
          loadDefaultNewsArticlesProp={this.loadDefaultNewsArticles}
        />
      </Paper>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
