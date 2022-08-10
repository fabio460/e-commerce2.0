import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux/es/exports';
export default function Paginacao() {
  const [inicio, setInicio] = React.useState(1);
  const [fim, setFim] = React.useState(10);
  const [pagina, setPagina] = React.useState(1);
  const dispath = useDispatch()
  const handleChange = (event, value) => {
    setPagina(value)
    dispath({
        type:'indice',
        payload:{
            inicio:value*10 - 10,
            fim:value*10 - 2
        }
    })
  };
  
  console.log(localStorage.getItem('tamanhoDaLista'))
  var tamanhoDaLista = parseInt(localStorage.getItem('tamanhoDaLista'))
  return (
    <Stack spacing={1}>
      <Pagination count={ Math.round(tamanhoDaLista/10 )} page={pagina} onChange={handleChange} color='secondary'/>
    </Stack>
  );
}
