import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function BtnFlutuante() {
  const handleScroll = ()=>{
    window.scrollTo(0,0)
  }  
  
  const [display,setDisplay]=React.useState('none')
  window.onscroll = ()=>{
    if(window.scrollY > 50){
      setDisplay('block')
    }else{
      setDisplay('none')
    }
  }
  
  return (
    <Box sx={{ '& > :not(style)': { m: 1 },position:'fixed',bottom:'10px',right:"10px",display }}>
      <Fab color="primary" aria-label="add" onClick={handleScroll}>
        <ArrowUpwardIcon />
      </Fab>
    
    </Box>
  );
}
