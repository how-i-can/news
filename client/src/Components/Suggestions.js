import React, { Component } from 'react'

class Suggestions extends Component {

  handleClick = (e, article) => {
    this.props.handleSearchClick(e, article)
  }

  render() {
    const options = this.props.queriedArticles.map(article => (
      <li key={article.id} onClick={(e) => this.handleClick(e, article)}>
        {article.title}
      </li>
    ))
    let styles = {
      "listStyle": "none",
      "padding": "0px",
      "cursor": "pointer"
    }
    return <ul style={styles}>{options}</ul>
  }

}

export default Suggestions
