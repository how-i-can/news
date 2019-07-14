import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
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

const styles = theme => ({
  card: {
    display: "flex",
    maxWidth: 400,
    marginTop: 10,
    boxShadow: "none"
  },
  details: {
    display: "flex",
    flexDirection: 'column'
  },
  date: {
    paddingBottom: 10
  },
  title: {
    fontSize: 13.5,
    color: "textPrimary",
    paddingBottom: 10,
    textTransform: "uppercase"
  },
  media: {
    height: 0,
    width: "353px",
    padding: "10.25%"
  },
  actions: {
    display: "flex"
  },
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
      <Card className={classes.card}>
        <div className={classes.details}>
        {/* <CardHeader
          subheader={article.publishedAt}
          title={article.title}
          className={classes.cardHeader}
        /> */}
        {console.log(classes)}
        <CardContent>
          <Typography className={classes.date} color="textSecondary">{article.publishedAt}</Typography>
          <Typography className={classes.title} color="textPrimary">{article.title}</Typography>
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
      </div>
        <CardMedia
          className={classes.media}
          image={article.urlToImage}
          title="Paella dish"
        />
      </Card>
    );
  }
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewsCard);
