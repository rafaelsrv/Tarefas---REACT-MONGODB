import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

import './styles.css'

export default function RadioButton() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (

    <div className="radioOptions">
      <Radio {...controlProps('e')}
        sx={{
          color: '#FFD3CA',
          '&.Mui-checked': {
            color: '#EB8F7A',
          },
        }} />
        <span>Todos</span>
      
      <Radio
        {...controlProps('f')}
        sx={{
          color: '#FFD3CA',
          '&.Mui-checked': {
            color: '#EB8F7A',
          },
        }} />
        <span>Prioridade</span>
      <Radio {...controlProps('g')}
        sx={{
          color: '#FFD3CA',
          '&.Mui-checked': {
            color: '#EB8F7A',
          },
        }} />
        <span>Normal</span>
    </div>
  );
}