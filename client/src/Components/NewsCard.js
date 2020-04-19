import React, { Component } from "react";
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
import Pause from "@material-ui/icons/NotInterested";
import TimeAgo from "@material-ui/icons/AccessTime"
import BookMark from "@material-ui/icons/BookmarkBorder";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  newsCard: {
    marginBottom: "15px",
  },
  media: {
    //width: "93px",
    height: "0",
    marginTop: 20,
    marginLeft: 20,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    // fontSize: 13.5,
    // fontWeight: 500,
    // color: "textPrimary",
    // textTransform: "uppercase",
    // paddingLeft: 0,
    // fontFamily: 'Source Sans Pro',
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", { duration: theme.transitions.duration.shortest })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  actions: {
    background: 'linear-gradient(to bottom, #ffffff, #a8cbd7)'
  },
  actionOne: {
    background: 'white'
  }
});

class NewsCard extends Component {
  state = {
    expanded: false
  };

  handleExpandClick = () => {
    this.setState(state => ({
      expanded: !state.expanded
    }));
  };

  calculateHours = (date) => {
    let datePublished = new Date(date).getTime()
    let dateNow = new Date().getTime()
    let milliseconds = dateNow - datePublished
    let hours = Math.round(milliseconds / 1000 / 60 / 60)
    if (hours < 2) {
      return ` ${hours}hr ago`
    } else {
      return ` ${hours}hrs ago`
    }
  }

  render() {
    const { classes, article } = this.props;
    const hours = this.calculateHours(article.publishedAt)
    return (
      <div className={classes.newsCard}>
        <Card className={classes.card}>
          <Grid container="container" spacing={24}>
          <Grid item="item" xs={12}>              
            </Grid>
            <Grid item="item" xs={12}>
              <CardMedia className={classes.media} image={article.urlToImage} title={article.source.name} />
            </Grid>
            <Grid item="item" xs={12}>
              <CardContent>
                <Typography
                    className={classes.title}
                    variant="h6"
                    color="inherit"
                  >
                    {article.title}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item="item" xs={12}>
              <CardContent>
                <Typography className={classes.date} color="textSecondary">
                  <TimeAgo style={{fontSize:20}}/>
                  {hours}
                </Typography>
              </CardContent>
              <CardActions className={!this.state.expanded ? classes.actions : classes.actionOne} disableActionSpacing="disableActionSpacing">
                <IconButton className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })} onClick={this.handleExpandClick} aria-expanded={this.state.expanded} aria-label="Show more">
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>

              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit="unmountOnExit">
                <CardContent>
                  <Typography paragraph="paragraph">By {article.author}</Typography>
                  <Typography paragraph="paragraph">{article.content} <a href={article.url}>Read More</a></Typography>
                </CardContent>
              </Collapse>
            </Grid>
          </Grid>
        </Card>
      </div>);
  }
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewsCard);
