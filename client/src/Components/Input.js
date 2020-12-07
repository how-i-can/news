import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const Input = props => {
  const {
    id,
    label,
    variant,
    className,
    disabled,
    helperText,
    onChange,
    placeholder,
  } = props;

  return (
    <form noValidate autoComplete="off">
      <TextField
        id={id}
        label={label}
        variant={variant}
        className={className}
        disabled={disabled}
        helperText={helperText}
        onChange={onChange}
        placeholder={placeholder}
      />
    </form>
  );
};

Input.defaultProps = {
  id: "outlined-basic",
  label: "Name",
  variant: "outlined",
  className: "",
  disabled: false,
  helperText: "",
  onChange: () => {},
  placeholder: "",
};

Input.protoTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
