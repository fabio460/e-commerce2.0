import { Button, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemDoCarrinho from './ItemDoCarrinho.js'
import ListaDoCarrinho from './ListaDoCarrinho.js'
import ListaDoCarrinho2 from './ListaDoCarrinho2.js'
import './carrinho.css'
import ListaDoCarrinho4 from './ListaDoCarrinho4.js'
import { useNavigate } from 'react-router-dom'
export default function TelaCarrinhoDeCompras() {
  const [list,setList]=useState([])
  const dispath = useDispatch()
  const total = useSelector(state=>state.valorTotalReducer.total)
  const navigate = useNavigate()
  const finalizarCompra = ()=>{
    alert('falta ainda implementar')
  }
  return (
    <div className='telaDoCarrinho'>
        <div className='telaDoCarrinhoLeft'>
           <ListaDoCarrinho/>
        </div>
        <div className='telaDoCarrinhoRight'>
          <Button variant='outlined' size='small' color='error' onClick={()=> navigate('/')}>Retornar aos pedidos</Button>
          <Button variant='outlined'  size='small' color='success' onClick={finalizarCompra}>Finalizar pedido</Button>
         <h4>
            valor total a pagar  {total} R$
         </h4>
        </div>
    </div>
  )
}
