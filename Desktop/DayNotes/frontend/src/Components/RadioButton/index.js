import * as React from 'react';
import Radio from '@mui/material/Radio';

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('all');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    
  };



  return (
    <div>
      <Radio
        checked={selectedValue === 'all'}
        onChange={handleChange}
        value="all"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'true'}
        onChange={handleChange}
        value="true"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
      <Radio
        checked={selectedValue === 'false'}
        onChange={handleChange}
        value="false"
        name="radio-buttons"        
        inputProps={{ 'aria-label': 'C' }}
      />
    </div>
  );
}