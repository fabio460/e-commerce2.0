import { Button, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemDoCarrinho from './ItemDoCarrinho.js'
import ListaDoCarrinho from './ListaDoCarrinho.js'
import ListaDoCarrinho2 from './ListaDoCarrinho2.js'
import './carrinho.css'
export default function TelaCarrinhoDeCompras() {
  const [list,setList]=useState([])
  const dispath = useDispatch()
  const tamanhoDoCarrinho = useSelector(state=>state.CarrinhoDeComprasReducer.tamanhoDoCarrinho)
  async function getCarrinho(params) {
    const l =await fetch('https://api-e-commerce.vercel.app/listarCarrinho').then(r=>r.json())
    setList(l)
    dispath({
      type:'tamanhoDoCarrinho',
      payload:{
        tamanhoDoCarrinho:l.length,
      }
    })

  } 

  const atualiza = useSelector(state=>state.AtualizarApi.atualiza)
  useEffect(()=>{
    getCarrinho()
  },[tamanhoDoCarrinho,atualiza])
  return (
    <div className='ListaDoCarrinho'>
        <div className='ListaDoCarrinhoUp'><ListaDoCarrinho2 list={list}/></div>
        <div className='ListaDoCarrinhoDown'>
          <Button variant='outlined' size='small' color='error'>Retornar aos pedidos</Button>
          <Button variant='outlined'  size='small' color='success'>Finalizar pedido</Button>
        </div>
    </div>
  )
}
