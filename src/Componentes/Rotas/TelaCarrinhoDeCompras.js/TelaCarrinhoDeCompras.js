import React, { useEffect } from 'react'

export default function TelaCarrinhoDeCompras() {
  async function getCarrinho(params) {
    const l =await fetch('https://api-e-commerce.vercel.app/listarCarrinho').then(r=>r.json())
    console.log(l)
  } 
  
  useEffect(()=>{
    getCarrinho()
  },[])
  return (
    <div>
        falta implementar 
    </div>
  )
}
