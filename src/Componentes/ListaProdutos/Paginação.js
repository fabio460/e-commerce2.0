import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux/es/exports';
export default function Paginacao() {
  const [pagina, setPagina] = React.useState(1);
  const dispath = useDispatch()
  const posicao = useSelector(state=>state.IndicePaginacaoReducer)
  const handleChange = (event, value) => {
    setPagina(value)
      dispath({
        type:'indice',
        payload:{
            inicio:8*(value - 1),
            fim:8*value
        }
      })
  };
  var tamanhoDaLista = parseInt(localStorage.getItem('tamanhoDaLista'))
  return (
   <div>    
     <Stack spacing={1}>
      <Pagination count={ Math.ceil(tamanhoDaLista/8 )} page={pagina} onChange={handleChange} color='secondary'/>
    </Stack>
   </div>
  );
}
