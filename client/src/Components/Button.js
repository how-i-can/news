import React from "react";
import { makeStyles } from "@material-ui/styles";
import MuiButton from "@material-ui/core/Button";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: "#FED96E",
    borderRadius: "40px",
    textTransform: "none",
    marginTop: "8px",
    "&:hover": {
      backgroundColor: "#fba53c",
    },
  },
}));

const Button = props => {
  const { variant, className, disabled, size, type, onClick, children } = props;

  const classes = useStyles();

  return (
    <MuiButton
      variant={variant}
      className={`${classes.button} ${className}`}
      disabled={disabled}
      size={size}
      type={type}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

Button.defaultProps = {
  variant: "outlined",
  className: "",
  disabled: false,
  size: "medium",
  type: "submit",
  onClick: () => {},
};

Button.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
