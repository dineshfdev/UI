import React from 'react';
import TextField from '@material-ui/core/TextField';

function CustomTextField({ ...props }) {
  return (
    <div>
      <TextField
        error={props.error}
        id="standard-error-helper-text"
        label={props.label}
        helperText="Incorrect entry."
        type={props.fieldType}
      />
    </div>
  );
}

export default CustomTextField;
