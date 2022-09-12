import { Button, Link, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemDoCarrinho from './ItemDoCarrinho.js'
import ListaDoCarrinho from './ListaDoCarrinho.js'
import ListaDoCarrinho2 from './ListaDoCarrinho2.js'
import './carrinho.css'
import ListaDoCarrinho4 from './ListaDoCarrinho4.js'
import { useNavigate } from 'react-router-dom'
import ListaDoCarrinho3 from './ListaDoCarrinho3.js'
export default function TelaCarrinhoDeCompras() {
  const [list,setList]=useState([])
  const dispath = useDispatch()
  const total = useSelector(state=>state.valorTotalReducer.total)
  const navigate = useNavigate()
  const finalizarCompra = ()=>{
    alert('falta ainda implementar')
  }

  const [campo,setCampo]=useState('');

  const buscoEndereco = ()=>{
    fetch(`https://viacep.com.br/ws/${campo}/json/`)
        .then(res=>res.json())
        .then(item=>{
          console.log(item.uf)
            if (item.uf !== undefined) {
              document.querySelector('.rua').innerHTML='Rua: '+item.logradouro;
              document.querySelector('.bairro').innerHTML='Bairro: '+ item.bairro;
              if(item.complemento){
                document.querySelector('.complemento').innerHTML='Complemento: '+item.complemento;
              }else{document.querySelector('.complemento').innerHTML=''}
              document.querySelector('.localidade').innerHTML='Cidade: '+item.localidade;
              document.querySelector('.ddd').innerHTML='DDD: '+item.ddd;
              document.querySelector('.uf').innerHTML='UF: '+item.uf;
            }else{
              document.querySelector('.rua').innerHTML='';
              document.querySelector('.bairro').innerHTML='';
              document.querySelector('.complemento').innerHTML=''
              document.querySelector('.localidade').innerHTML='';
              document.querySelector('.ddd').innerHTML='';
              document.querySelector('.uf').innerHTML='';
            }
        })
         .catch(res=>{
          document.querySelector('.rua').innerHTML='';
          document.querySelector('.bairro').innerHTML='';
          document.querySelector('.complemento').innerHTML=''
          document.querySelector('.localidade').innerHTML='';
          document.querySelector('.ddd').innerHTML='';
          document.querySelector('.uf').innerHTML='';
         });
 
    }
    buscoEndereco()
  return (
    <div className='telaDoCarrinho'>
        <div className='telaDoCarrinhoLeft'>
           <ListaDoCarrinho3/>
        </div>
        <div className='telaDoCarrinhoRight'>
          <div>
            <h5>
                Total a pagar R$ {total} 
            </h5>
            <div>ou 6x de R$ <strong style={{color:'red'}}>{(total/2).toFixed(2)}</strong> sem juros</div>
              <div>
                <Typography sx={{margin:"15px 0px"}}>Endereço de entrega</Typography>
                <TextField 
                  id="demo-helper-text-misaligned-no-helper" 
                  label="Cep" 
                  onChange={(e)=>{setCampo(e.target.value.replace("-",""))}}  
                  sx={{padding:"0px"}}
                  size='small'
                />
              </div>
              <div className='bodyCep'>
                  <div className='rua'></div>
                  <div className='bairro'></div>
                  <div className='complemento'></div>
                  <div className='localidade'></div>
                  <div className='ddd'></div>
                  <div className='uf'></div>
              </div>
              
          </div>
           <div className='botoesCarrinho'>
              <Button style={{margin:'10px 0px'}} variant='outlined' size='small' color='error' onClick={()=> navigate('/')}>Escolher mais produtos</Button>
              <Button variant='outlined'  size='small' color='success' onClick={finalizarCompra}>Finalizar pedido</Button>
          
           </div>
        </div>
    </div>
  )
}
