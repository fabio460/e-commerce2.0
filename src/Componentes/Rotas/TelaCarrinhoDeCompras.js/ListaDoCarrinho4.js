import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';

var columns = [


];

function name(params) {
  return <div>{params}</div>
}

export default function ListaDoCarrinho4() {
  var rows = [];
  const [atualizar,setAtualizar]=React.useState(false)
  function toFloat(num) {
    let numArr = num.split(',')
    let str = numArr[0]+'.'+numArr[1]
    let n = parseFloat(str)
    return n
  }
  const [listCarrinho,setListCarrinho]=React.useState([])
  const [tudo,setTudo]=React.useState()
  const dispath = useDispatch()





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






  const getList = async ()=>{
    const l =await fetch('https://api-e-commerce.vercel.app/listarCarrinho').then(r=>r.json())
    setListCarrinho(l)
    columns =[
      { field: 'nome', headerName: 'Produto', width: 430,renderCell:(params)=>{
        return <div style={{display:'flex'}}>
          <img className='imagemDaListaCarrinho' src={params.row.produto.imagem1}/>
          <div>
              <div>{params.row.produto.nome}</div>
              <div>{params.row.produto.valor}</div>
              <div>{params.row.produto.tamanho}</div>
          </div>
        </div>
      } },
      { field: 'quantidade', headerName: 'quantidade', width: 150, renderCell:(params)=>{
        return <div>
          <div style={{display:'flex',justifyContent:'center'}}>

            <div style={{display:'flex',alignItems:'center'}}>
                <div style={{padding:'1px',height:'40px',width:"40px",display:'flex', alignItems:'center',justifyContent:"center"}}>
                   <IconButton onClick={()=> diminuirQuantidade(params.row.objeto.imagem1)} sx={{height:'40px',width:"40px"}}>
                     <span style={{marginBottom:'5px',fontSize:'30px'}}> - </span>
                   </IconButton>
                </div>
                {params.row.objeto.quantidade}
                <div style={{padding:'1px',height:'40px',width:"40px",display:'flex', alignItems:'center',justifyContent:"center"}}>
                   <IconButton onClick={()=> aumentarQuantidade(params.row.objeto.imagem1)} sx={{height:'40px',width:"40px"}}> 
                   <span style={{marginBottom:'5px',fontSize:'30px'}}> + </span> 
                   </IconButton>
                </div>
              </div>
          </div>
        </div>
      } },
      { field: 'subtotal', headerName: 'Sub-total', width: 130,renderCell: (params)=>{
        return <div>
            <div className='total' id={(toFloat(params.row.objeto.valor,params.row.objeto.quantidade)*parseInt(params.row.objeto.quantidade)).toFixed(2)}>
            {(toFloat(params.row.objeto.valor,params.row.objeto.quantidade)*parseInt(params.row.objeto.quantidade)).toFixed(2)} R$
              </div>
        </div>
      } }
    ]
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
    console.log(tudo.toFixed(2))
    dispath({
      type:'total',
      payload:{total:tudo.toFixed(2)}
    })
  }, 500);

  React.useEffect(()=>{
    getList()
    console.log(listCarrinho)
    
  },[atualizar])
  listCarrinho.map(e=>{
    return rows.push({
       id: e._id, produto: e, objeto: e, objeto: e
    })
  })

 
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onColumnHeaderClick='2'
        sx={{height:"500px"}}
        rowHeight='100px'
      />
    </div>
  );
}
