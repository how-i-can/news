import React, { Component } from "react";
import BottomNavBar from "./BottomNavBar";
import NewsCards from "./NewsCards";
import NoResults from "./NoResults";
import SearchBar from "./SearchBar";
import Suggestions from "./Suggestions";
import axios from "axios";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  landingPage: {
    flexGrow: 1,
    overflow: "hidden",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: "Source Sans Pro",
    color: "#084D67",
  },
  paper: {
    maxWidth: 450,
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
      hasSearchResults: false,
      showNoResultsCard: false,
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
        if (res.length > 0) {
          this.setState({ hasSearchResults: true, showNoResultsCard: false });
        } else {
          this.setState({ hasSearchResults: false, showNoResultsCard: true });
          this.setState({ queryResultArticles: [] });
        }
        if (res.length < 6) {
          this.setState({ queryResultArticles: response.data });
        } else {
          res = res.slice(0, 5);
          this.setState({ queryResultArticles: res });
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

  handleSearchClick = (e, article) => {
    e.preventDefault();
    this.clearSuggestions();
    this.setState({ newsCardArticles: [article] });
  };

  handleClearClick = (e, article) => {
    this.clearSuggestions();
  };

  clearSuggestions = () => {
    this.setState({ query: "", queryResultArticles: [] });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.landingPage}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap">
            <Grid item xs zeroMinWidth>
              <SearchBar
                handleClearClick={this.handleClearClick}
                handleInputChange={this.handleInputChange}
                query={this.state.query}
              />
              {this.state.hasSearchResults && (
                <Suggestions
                  queryResultArticles={this.state.queryResultArticles}
                  handleSearchClick={this.handleSearchClick}
                />
              )}
            </Grid>
          </Grid>
          {this.state.showNoResultsCard && !this.state.hasSearchResults && (
            <Card>
              <NoResults query={this.state.query} />
            </Card>
          )}
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="wrap" spacing={16}>
            <Grid item xs>
              {!this.state.showNoResultsCard && (
                <NewsCards
                  handleChange={this.handleChange}
                  articles={this.state.newsCardArticles}
                />
              )}
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
