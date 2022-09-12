import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function BotoesParcelas() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="1x"
        name="radio-buttons-group"
        sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 28,
            },
          }}
      >
        <FormControlLabel value="1x" control={<Radio />} label="1x" />
        <FormControlLabel value="2x" control={<Radio />} label="2x" />
        <FormControlLabel value="3x" control={<Radio />} label="3x" />
        <FormControlLabel value="4x" control={<Radio />} label="4x" />
        <FormControlLabel value="5x" control={<Radio />} label="5x" />
        <FormControlLabel value="6x" control={<Radio />} label="6x" />
      </RadioGroup>
    </FormControl>
  );
}
