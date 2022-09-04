
import { Button } from '@mui/material'
import React from 'react'
import AppBarBootstrap from '../../AppBar/AppBarBootstrap'
import BtnNavegacaoTamanho from './BtnNavegaçãoTamanhos'
import EstrelinhasFeedback from './EstrelinhasFeedback'
import './telaDeCompras.css'
export default function TelaDeCompra() {
  const produto = JSON.parse(localStorage.getItem('produto'))

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
                <div>R$ {produto.valor}</div>
                <div>ou 6x de 
                  <strong> R$ {(parseFloat(produto.valor)/6).toFixed(2).toString().replace('.',',')}</strong>
                </div>
                <div>Tamanho</div>
                <BtnNavegacaoTamanho/>
              </div>
              <div className='telaDeComprasRightBottom'>
                <Button variant="contained" sx={{margin:' 15px 0px'}}>Comprar </Button>
                <Button variant="outlined">Adicionar no carrinho </Button>
              </div>
          </div>
      </div>
    </div>
  )
}
