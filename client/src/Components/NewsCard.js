import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 400,
    marginTop: 10,
    boxShadow: "none"
  },
  // details: {
    // display: "flex",
    // flex: 1,
    // flexDirection: "row"
  // },
  media: {
    width: "80px",
    height: "60px",
    marginTop: 20,
    marginLeft: 20
  },
  title: {
    fontSize: 13.5,
    fontWeight: 500,
    color: "textPrimary",
    textTransform: "uppercase"
  },
  // actions: {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   flexDirection: "column"
  // },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class NewsCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, article } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card className={classes.card}>
             <Grid item xs={6}>
               {/* <div className={classes.details}> */}
              <CardMedia
                className={classes.media}
                image={article.urlToImage}
                title="Paella dish"
              />
            {/* </div> */}
            </Grid>
          <Grid item xs={6}>
            {/* <CardHeader
              subheader={article.publishedAt}
              title={article.title}
              className={classes.cardHeader}
            /> */}
            {console.log(classes)}

            <CardContent>
              <Typography className={classes.date} color="textSecondary">{article.publishedAt}</Typography>
              <Typography className={classes.title} color="textPrimary">{article.title}</Typography>
            </CardContent>
        </Grid>
            <Grid item xs={12}>
              <CardContent>
            <Typography component="p" color="textSecondary">{article.description}</Typography>
          </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Content</Typography>
                <Typography paragraph>{article.content}</Typography>
              </CardContent>
            </Collapse>
          </Grid>
          </Card>
         </Grid>
        </Grid>
      </div>


    );
  }
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewsCard);
