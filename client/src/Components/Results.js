// import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
// import ClearIcon from '@material-ui/icons/Clear';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import Button from "@material-ui/core/Button"
//
// const styles = theme => ({
//   results: {
//     backgroundColor: 'white',
//     color: 'grey',
//     boxShadow: '0.25',
//     // display: 'none',
//     // visibility: 'hidden'
//   },
// })
//
// class Results extends Component {
//   state = {
//     isShowing: false
//   };
//
//   handleShow = () => {
//     this.setState({isShowing: true});
//   };
//
//   handleHide = () => {
//     this.setState({isShowing: false});
//   };
//
//   handleClick = (e, article) => {
//     this.props.handleSearchClick(e, article)
//   }
//
//   render() {
//     return(
//       <div>
//          {this.state.isShowing}
//           {this.state.isShowing ?(
//              <InputAdornment position='end'>
//                <ClearIcon onClick={this.handleHide}/>
//              </InputAdornment>
//           ) : (
//             <Button onClick={this.handleShow}/>
//           )}
//        </div>
//     )
//   }
//
//
// }
//
// export default withStyles(styles)(Results);
