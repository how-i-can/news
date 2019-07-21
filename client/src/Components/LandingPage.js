import React, { Component } from "react";
import NewsCards from "./NewsCards";
import SearchBar from "./SearchBar";
import BottomNavBar from "./BottomNavBar";
import axios from 'axios'
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  landingPage: {
    width: "100%"
  },
  title: {
    textAlign: "center",
    fontFamily: 'Source Sans Pro',
    color: "#084D67"
  }
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
        if(res < 6) {
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
    this.setState({ articles: [article]})
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.landingPage}>
      <SearchBar
          handleInputChange={this.handleInputChange}
          queriedArticles={this.state.queriedArticles} 
          query={this.state.query}
          handleSearchClick={this.handleSearchClick}
          />
      <h3 className={classes.title}>Top Stories</h3>
      <NewsCards
          handleChange={this.handleChange}
          articles={this.state.articles}
        />
      <BottomNavBar />
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
