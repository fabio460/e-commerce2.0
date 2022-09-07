import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';


export default function BtnNavegacaoTamanho({setTamanho}) {
  
  const [ativo,setAtivo]=React.useState([
    'primary','inrerit','inrerit','inrerit','inrerit'
  ])  
  const getId = (e)=>{
    let zerarArray = ['inrerit','inrerit','inrerit','inrerit','inrerit']
    let arrAux = ativo
    zerarArray[parseInt(e)]='primary'
    setAtivo(zerarArray)
    switch (e) {
      case '0':
        setTamanho(38)
        break;
        case '1':
          setTamanho(39)
        break;        
        case '2':
          setTamanho(40)
        break; 
        case '3':   
        setTamanho(41)
        break;
        case '4':
          setTamanho(42)
        break;        
        case '5':
          setTamanho(43)
        break;           
      default:
        setTamanho(38)
        break;
    }
  }
  
  const boxStyle = { 
    '& > :not(style)': { m: 1 },
     
     padding:'0px',
     marginLeft:'-10px',
   
    "@media (max-width:800px)":{
        display:'flex',
        justifyContent:"center",
        marginLeft:'0px',
    }
  }
  return (
    <Box sx={boxStyle}>
      <Fab color={ativo[0]} size="small"  aria-label="add" id='0' className='Fab' onClick={e=>getId(e.target.id)}>
        38
      </Fab>
      <Fab color={ativo[1]} size="small" aria-label="add" id='1' className='Fab' onClick={e=>getId(e.target.id)}>
        39
      </Fab>
      <Fab color={ativo[2]} size="small" aria-label="add" id='2' className='Fab' onClick={e=>getId(e.target.id)}>
        40
      </Fab>
      <Fab color={ativo[3]}size="small" aria-label="add" id='3' className='Fab' onClick={e=>getId(e.target.id)}>
        41
      </Fab>
      <Fab color={ativo[4]} size="small" aria-label="add" id='4' className='Fab' onClick={e=>getId(e.target.id)}>
        42
      </Fab>
    </Box>
  );
}
