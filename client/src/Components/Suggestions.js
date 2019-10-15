import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const styles = theme => ({
  root: {
    display: 'block',
    width: '100%',
    maxWidth: 360,
    cursor: 'pointer',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
});

class Suggestions extends Component {

  handleClick = (e, article) => {
    this.props.handleSearchClick(e, article)
  }

  render() {
    const options = this.props.queriedArticles.map(article => (
      <ListItem button key={article.id} onClick={(e) => this.handleClick(e, article)} className={styles.root}>
        {article.title}
      </ListItem>

    ))

    return (
    <div >
      <List component="nav" aria-label="results">
          {options}
      </List>
    </div>
  );
  }

}

export default Suggestions
