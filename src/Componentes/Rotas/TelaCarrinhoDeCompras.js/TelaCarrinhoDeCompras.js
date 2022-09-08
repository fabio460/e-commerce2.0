import { Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemDoCarrinho from './ItemDoCarrinho.js'
import ListaDoCarrinho from './ListaDoCarrinho.js'
import ListaDoCarrinho2 from './ListaDoCarrinho2.js'

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
    // dispath({
    //   type:'atualiza',
    //   payload:{
    //     atualiza:!atualiza,
    //   }
    // })

  },[tamanhoDoCarrinho,atualiza])
  return (
    <div>
        {/* {list.map(item=>{
          return <div>
             <div>{item.nome}</div>
             <div><img style={{width:'80px'}} src={item.imagem1}/></div>
             <div>{item.tamanho}</div>
             <div>{item.valor}</div>
             <div>{item.quantidade}</div>
             <ItemDoCarrinho item={item}/>
          </div>
        })} */}
        <div>
          
        </div>
        <ListaDoCarrinho2 list={list}/>
    </div>
  )
}
