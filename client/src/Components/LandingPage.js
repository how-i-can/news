import React, { Component } from "react";
import NewsCards from "./NewsCards";
import SearchBar from "./SearchBar";
import BottomNavBar from "./BottomNavBar";
import PropTypes from 'prop-types';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  landingPage: {
    flexGrow: 1,
    overflow: 'hidden',
    alignItems: 'center'
  },
  title: {
    textAlign: "center",
    fontFamily: 'Source Sans Pro',
    color: "#084D67"
  },
  paper: {
    maxWidth: 450,
    margin: `${theme.spacing.unit}px auto`,
    padding: '0px',
  },
});

class LandingPage extends Component {
  state = {
    articles: [],
    queriedArticles: [],
    query: '',
    error: false,
    isLoading: false,
    loadSearchedQuery: false
  }

  handleChange = (indexKey, data) => {
    this.setState({ [indexKey]: data });
  };

  getInfo = async () => {
    const { query } = this.state;
    await axios.post('/news/search', { query })
      .then((response) => {
        let res = response.data
        if (res < 6) {
          this.setState({
            queriedArticles: response.data
          })
        } else {
          res = res.slice(0, 5)
          this.setState({
            queriedArticles: res
          })
        }

      })
      .catch(() => this.setState({ error: true }))
  }

  handleInputChange = (queryVal) => {
    const { query } = this.state;
    this.setState({
      query: queryVal
    }, () => {
      if (query && query.length > 1) {
        if (query.length % 2 === 0) {
          this.getInfo()
        }
      }
    })
  }

  handleSearchClick = (e, article) => {
    e.preventDefault()
    this.setState({ articles: [article] })
  }

  handleClear = (e) => {
    this.setState ({
      // articles: [],
      queriedArticles: [],
      query: '',
      error: false,
      isLoading: false,
      loadSearchedQuery: false
    })

  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.landingPage}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item xs zeroMinWidth>
            <SearchBar
                handleInputChange={this.handleInputChange}
                queriedArticles={this.state.queriedArticles}
                query={this.state.query}
                handleSearchClick={this.handleSearchClick}
                handleClear={this.handleClear}
                handleInputClear={this.handleInputClear}
              />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap spacing={16}>
          <Grid item xs>
          <NewsCards
                handleChange={this.handleChange}
                articles={this.state.articles}
              />
          </Grid>
        </Grid>
      </Paper>
        <Grid container wrap="nowrap"  className={classes.paper}>
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
