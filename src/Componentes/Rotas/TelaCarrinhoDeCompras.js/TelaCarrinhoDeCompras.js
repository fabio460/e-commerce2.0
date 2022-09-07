import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function TelaCarrinhoDeCompras() {
  const [list,setList]=useState([])
  const dispath = useDispatch()
  const tamanhoDoCarrinho = useSelector(state=>state.CarrinhoDeComprasReducer.tamanhoDoCarrinho)
  async function getCarrinho(params) {
    const l =await fetch('https://api-e-commerce.vercel.app/listarCarrinho').then(r=>r.json())
    
    setList(l)
    dispath({
      type:'tamanhoDoCarrinho',
      payload:{tamanhoDoCarrinho:l.length}
    })
    console.log(tamanhoDoCarrinho)
  } 

  useEffect(()=>{
    getCarrinho()

  },[tamanhoDoCarrinho])
  return (
    <div>
        {list.map(item=>{
          return <div>
             <div>{item.nome}</div>
             <div><img style={{width:'80px'}} src={item.imagem1}/></div>
             <div>{item.tamanho}</div>
             <div>{item.valor}</div>
             <div>{item.quantidade}</div>
          </div>
        })}
    </div>
  )
}
