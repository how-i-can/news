import React from 'react'
import Suggestions from "./Suggestions"
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";



const styles = theme => ({
  textField: {
    width: 200,
  }
})

const SearchBar = (props) => {
  // const { classes } = this.props;
  
  return (
      <form>
        <InputBase
          placeholder="Search for..."
          // ref={input => this.search = input}
          // onChange={this.handleInputChange}
        />
        {/* <p>{this.props.query}</p> */}
        {/* <Suggestions results={this.props.results} /> */}
      </form>
    )
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar)

