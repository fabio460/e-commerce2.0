import { Checkbox, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CarregandoLista from './CarregandoLista';



export default function ListaDoCarrinho() {
  
  const [listCarrinho,setListCarrinho]=React.useState([])
  const [atualizar,setAtualizar]=React.useState(false)
  const dispath = useDispatch()
  const tamanhoDoCarrinho = useSelector(state=>state.CarrinhoDeComprasReducer.tamanhoDoCarrinho)
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  
var rows = [
  createData("",
    <CarregandoLista/>,
    <CarregandoLista/>,
    <CarregandoLista/>,
    <CarregandoLista/>,
    <CarregandoLista/>,
    <CarregandoLista/>
  ),
];


  const getList = async ()=>{
    const l =await fetch('https://api-e-commerce.vercel.app/listarCarrinho').then(r=>r.json())
    setListCarrinho(l)
  }

  const [tudo,setTudo]=useState()
  function somaTudo(v) {
    setTudo(tudo + v)
  }

  function toFloat(num) {
    let numArr = num.split(',')
    let str = numArr[0]+'.'+numArr[1]
    let n = parseFloat(str)
    return n
  }

  let arr =[]

  
  setTimeout(() => {
    document.querySelectorAll('.total').forEach(e=>{
      arr.push(parseFloat(e.id))
    })
    let aux = 0
    arr.forEach(e=>{
      aux+=e
    })
    setTudo(aux)
    
    dispath({
      type:'total',
      payload:{total:tudo.toFixed(2)}
    })
  }, 500);
  async function getCarrinho() {
    rows = []
    listCarrinho.map(item=>{
         rows.push(
            createData(
              <div key={item._id} style={{display:"none"}}>{item._id}</div>,
              <div style={{display:'flex'}}>
                  <img src={item.imagem1} className='imagemDaListaCarrinho' />
                 <div>
                    <div>{item.nome}</div>          
                    <div>{item.valor} R$</div> 
                    <div>tamanho {item.tamanho}</div> 
                  </div>         
              </div>,
          
              <div style={{display:'flex',alignItems:'center'}}>
                <div style={{padding:'1px',height:'40px',width:"40px",display:'flex', alignItems:'center',justifyContent:"center"}}>
                   <IconButton onClick={()=> diminuirQuantidade(item.imagem1)} sx={{height:'40px',width:"40px"}}>
                     <span style={{marginBottom:'5px',fontSize:'30px'}}> - </span>
                   </IconButton>
                </div>
                {item.quantidade}
                <div style={{padding:'1px',height:'40px',width:"40px",display:'flex', alignItems:'center',justifyContent:"center"}}>
                   <IconButton onClick={()=> aumentarQuantidade(item.imagem1)} sx={{height:'40px',width:"40px"}}> 
                   <span style={{marginBottom:'5px',fontSize:'30px'}}> + </span> 
                   </IconButton>
                </div>
              </div>,
              <div className='total' id={(toFloat(item.valor,item.quantidade)*parseInt(item.quantidade)).toFixed(2)}>
                {(toFloat(item.valor,item.quantidade)*parseInt(item.quantidade)).toFixed(2)} R$
              </div>
              ),
        )
    })    
  } 
  getCarrinho()



  const diminuirQuantidade = async(e)=>{
    try {
      
      listCarrinho.filter(elem=>{
        if (elem.imagem1 === e && parseInt(elem.quantidade) > 1) {
          
          const formdata = new FormData()
          formdata.append('quantidade',parseInt(elem.quantidade)-1)
          fetch('https://api-e-commerce.vercel.app/atualisacarrinho/'+elem._id,{
            method:"PUT",
            body:formdata
          })
         // window.location.reload()
         setTimeout(() => {
          setAtualizar(!atualizar) 
         }, 200);
         
        }
      })
     } catch (error) {
        console.log(error)
     }
  }

  const  aumentarQuantidade = async(e)=>{
    try {
     
     listCarrinho.filter(elem=>{
       if (elem.imagem1 === e) {
         const formdata = new FormData()
         formdata.append('quantidade',parseInt(elem.quantidade)+1)
         fetch('https://api-e-commerce.vercel.app/atualisacarrinho/'+elem._id,{
           method:"PUT",
           body:formdata
         })
         setTimeout(() => {
           setAtualizar(!atualizar) 
          }, 200);
       }
     })
    } catch (error) {
       console.log(error)
    }
   
 }



 
 
 useEffect(()=>{
  getList()
  
},[tamanhoDoCarrinho,atualizar])

const [checked, setChecked] = React.useState(false);

const handleChange = (event) => {
  setChecked(event.target.checked);
  
};


const getElem = (e)=>{
  window.querySelectorAll('.PrivateSwitchBase-input').forEach(elem=>{
    return console.log(elem)
  })
 
}
  return (
     <div className='listaContainer'>
          <TableContainer component={Paper} >
      <Table sx={{ minWidth: 2 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{overflowX: 'scroll', maxWidth:'100px'}}>
            <StyledTableCell sx={{width:"30px"}}>D</StyledTableCell>
            <StyledTableCell align="left">Produto</StyledTableCell>
            <StyledTableCell align="left">Quantidade</StyledTableCell>
            <StyledTableCell align="left">Sub-total</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              <Checkbox 
                  onclick={e=>getElem(checked)}
                  // checked={checked}
                   onChange={e=>getElem(e.target)}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     </div>
  );
}


