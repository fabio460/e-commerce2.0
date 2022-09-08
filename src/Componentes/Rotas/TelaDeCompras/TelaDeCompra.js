
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppBarBootstrap from '../../AppBar/AppBarBootstrap'
import BtnFlutuante from '../../Home/btnFlutuante'
import BtnNavegacaoTamanho from './BtnNavegaçãoTamanhos'
import EstrelinhasFeedback from './EstrelinhasFeedback'
import './telaDeCompras.css'
export default function TelaDeCompra() {
  const produto = JSON.parse(localStorage.getItem('produto'))
  const navigate = useNavigate()
  const [tamanho,setTamanho]=React.useState(38)
  const [quantidade,setQuantidade]=React.useState(1)
  const [existe,setExiste]=React.useState('não')
  const acionarCarrinho = async()=>{
    let aux = []
    try {
      // const l =await fetch('https://api-e-commerce.vercel.app/listarCarrinho').then(r=>r.json())
      // l.filter(elem=>{
        
      //   if(elem.imagem1 === produto.imagem1 && elem.tamanho.toString() === tamanho.toString()) {
      //     console.log('existe'+ elem.tamanho)
      //     aux.push(elem)
      //     setExiste('sim')
      //   }else{
      //     const formdata = new FormData()
      //     formdata.append("nome",produto.nome)
      //     formdata.append("imagem1",produto.imagem1)
      //     formdata.append("valor",produto.valor)
      //     formdata.append("quantidade",quantidade)
      //     formdata.append("tamanho",tamanho)
      //     fetch('https://api-e-commerce.vercel.app/postarCarrinho',{
      //       method:"POST",
      //       body:formdata
      //     })    
      //     console.log('não existe' + tamanho+' de '+ elem.tamanho)
      //     console.log(aux.length)
      //   }
      // })   
      //  console.log( existe)
      // console.log(l)
      // console.log(produto)
      // console.log(l)
      const formdata = new FormData()
      formdata.append("nome",produto.nome)
      formdata.append("imagem1",produto.imagem1)
      formdata.append("valor",produto.valor)
      formdata.append("quantidade",quantidade)
      formdata.append("tamanho",tamanho)
      fetch('https://api-e-commerce.vercel.app/postarCarrinho',{
        method:"POST",
        body:formdata
      })    
      
    } catch (error) {
      console.log(error)
    }
   
    navigate('/carrinhoCompras')
    window.location.reload()
  }
  
  return (
    <div>
        <AppBarBootstrap/>
        <div className='container telaDeCompras'>
          {/* {JSON.stringify(produto)} */}
          <div className='telaDeComprasLeft'>
              <img src={produto.imagem1}/>
          </div>
          <div className='telaDeComprasRight'>
              <div className='telaDeComprasRightTop'>
                <h4>{produto.nome}</h4>
                <EstrelinhasFeedback/>
                <div >R$ {produto.valor}</div>
                <div className='telaDeComprasRightBottomItens'>ou 6x de 
                  <strong> R$ {(parseFloat(produto.valor)/6).toFixed(2).toString().replace('.',',')}</strong>
                </div>
                <div>Tamanho</div>
                <BtnNavegacaoTamanho setTamanho={setTamanho}/>
              </div>
              <div className='telaDeComprasRightBottom'>
                <Button variant="contained" sx={{margin:' 15px 0px'}}>Comprar </Button>
                <Button variant="outlined" onClick={acionarCarrinho}>Adicionar no carrinho </Button>
              </div>
          </div>
      </div>
      <BtnFlutuante/>
    </div>
  )
}
