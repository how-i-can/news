import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const Input = props => {
  const {
    id,
    name,
    label,
    variant,
    className,
    disabled,
    helperText,
    onChange,
    placeholder,
    inputProps,
  } = props;

  const classes = useStyles();

  return (
    <TextField
      id={id}
      name={name}
      label={label}
      variant={variant}
      className={`${classes.input} ${className}`}
      disabled={disabled}
      helperText={helperText || ""}
      onChange={onChange}
      placeholder={placeholder}
      InputProps={inputProps}
    />
  );
};

const useStyles = makeStyles(() => ({
  input: {
    margin: "8px 0",
    backgroundColor: "#F6F6F6",
    borderRadius: "3px",
    "&::placeholder": {
      color: "#F6F6F6",
      fontSize: "8px",
    },
  },
}));

Input.defaultProps = {
  id: "outlined-basic",
  label: "",
  variant: "outlined",
  className: "",
  disabled: false,
  helperText: "",
  onChange: () => {},
  placeholder: "",
  inputProps: {},
};

Input.protoTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  inputProps: PropTypes.shape({
    endAdornment: PropTypes.node,
  }),
};

export default Input;
