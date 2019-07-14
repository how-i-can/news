import React from 'react'

const Suggestions = (props) => {
  const options = props.queriedArticles.map(r => (
    <li key={r.id}>
    {console.log(r)}
      {r.title}
    </li>
  ))
  let styles = {
    "list-style": "none"
  }
  return <ul style={styles}>{options}</ul>
}

export default Suggestions
