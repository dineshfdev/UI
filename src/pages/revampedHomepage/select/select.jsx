import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: 'LatoRegular',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export default function CustomizedSelect({
  options,
  handleChange,
  defaultValue = '',
}) {
  const [value, setValue] = React.useState(defaultValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    handleChange(value);
  }, [value, handleChange]);

  const renderOptions = () =>
    options.map((option, idx) => (
      <MenuItem key={idx} value={option.value}>
        {option.menu}
      </MenuItem>
    ));

  return (
    <div>
      <Select
        labelId="customized-select-label"
        id="customized-select"
        value={value}
        onChange={onChange}
        input={<BootstrapInput />}
        style={{width:300}}
      >
        {renderOptions()}
      </Select>
    </div>
  );
}
