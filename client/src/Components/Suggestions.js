// import React, { Component } from 'react'
//
// class Suggestions extends Component {
//
//   handleClick = (e, article) => {
//     this.props.handleSearchClick(e, article)
//   }
//
//   render() {
//     const options = this.props.queriedArticles.map(article => (
//       <li key={article.id} onClick={(e) => this.handleClick(e, article)}>
//         {article.title}
//       </li>
//     ))
//     let styles = {
//       "listStyle": "none",
//       "padding": "0px",
//       "cursor": "pointer"
//     }
//     return <ul style={styles}>{options}</ul>
//   }
//
// }
//
// export default Suggestions;
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import CancelIcon from '@material-ui/icons/Cancel';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// import InputAdornment from '@material-ui/core/InputAdornment';
import Button from "@material-ui/core/Button"

const styles = theme => ({
  results: {
    backgroundColor: 'white',
    color: 'grey',
    boxShadow: '0.25',
    // display: 'none',
    // visibility: 'hidden'
  },
  HighlightOffIcon: {
    // width: theme.spacing.unit * 5,
    color: 'grey',
    pointerEvents: "none",
    alignItems: "center",
    justifyContent: "center",
  },
})

class Suggestions extends Component {
  state = {
        isShowing: false
  }

  handleClick = (e, article) => {
    this.props.handleSearchClick(e, article)
  }

  handleClearResults = () => {
    this.setState({
      isShowing: false
})

}

render() {
  const options = this.props.queriedArticles.map(article => (
        <ListItem button key={article.id} onClick={(e) => this.handleClick(e, article)}>
          {article.title}
        </ListItem>
      ))
  let styles = {
        "listStyle": "none",
        "padding": "0px",
        "cursor": "pointer"
      }

  return (
  <div id="results">
    <HighlightOffIcon  onClick={this.props.handleClearResults}></HighlightOffIcon>
  <List style={styles}>{options}</List>

  {/*
            <Suggestions className={this.state.isShowing ? this.styles.active : this.styles.inactive} />
        ) */}
</div>

)
}


}

export default withStyles(styles)(Suggestions);
