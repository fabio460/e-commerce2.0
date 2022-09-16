import { Button, Link, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemDoCarrinho from './ItemDoCarrinho.js'

import './carrinho.css'

import { useNavigate } from 'react-router-dom'
import ListaDoCarrinho3 from './ListaDoCarrinho3.js'
import BotoesParcelas from './botoesParcelas.js'
import ModalFinalizarCompra from './modalFinalizarCompra.js'
export default function TelaCarrinhoDeCompras() {
  const [error,setError]=useState(false)
  const [campo,setCampo]=useState('');
  const [preenchido,setPreenchido]=useState(false)
  const dispath = useDispatch()
  const [rua,setRua]=useState()
  const [bairro,setBairro]=useState()
  const [cidade,setCidade]=useState()
  const [uf,setUf]=useState()
  const [numero,setNumero] = useState()
  const [complemento,setComplemento]=useState()
  const total = useSelector(state=>state.valorTotalReducer.total)
  const navigate = useNavigate()
  const finalizarCompra = ()=>{
    
    if (!preenchido) {
      setError(true)
      
    }else{
      setError(false)
      alert('falta ainda implementar'+rua)
    }
  }

  

  const buscoEndereco = async()=>{
      fetch(`https://viacep.com.br/ws/${campo}/json/`)
        .then(res=>res.json())
        .then(item=>{
          
            if (item.uf !== undefined) {
              setRua(item.logradouro)
              setComplemento(item.complemento)
              setCidade(item.localidade)
              setBairro(item.bairro)
              setUf(item.uf)
              document.querySelector('.rua').innerHTML='Rua: '+item.logradouro;
              document.querySelector('.bairro').innerHTML='Bairro: '+ item.bairro;
              if(item.complemento){
                document.querySelector('.complemento').innerHTML='Complemento: '+item.complemento;
              }else{document.querySelector('.complemento').innerHTML=''}
              document.querySelector('.localidade').innerHTML='Cidade: '+item.localidade;
              document.querySelector('.ddd').innerHTML='DDD: '+item.ddd;
              document.querySelector('.uf').innerHTML='UF: '+item.uf;
              setPreenchido(true)
              
            }else{
              document.querySelector('.rua').innerHTML='';
              document.querySelector('.bairro').innerHTML='';
              document.querySelector('.complemento').innerHTML=''
              document.querySelector('.localidade').innerHTML='';
              document.querySelector('.ddd').innerHTML='';
              document.querySelector('.uf').innerHTML='';
              setPreenchido(false)
            }
        })
         .catch(res=>{
         document.querySelector('.rua').innerHTML='';
          document.querySelector('.bairro').innerHTML='';
          document.querySelector('.complemento').innerHTML=''
          document.querySelector('.localidade').innerHTML='';
          document.querySelector('.ddd').innerHTML='';
          document.querySelector('.uf').innerHTML='';
          setPreenchido(false)
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
            rua test {rua}
            <div>ou 6x de R$ <strong style={{color:'red'}}>{(total/2).toFixed(2)}</strong> sem juros</div>
            
              <div>
                <Typography sx={{margin:"15px 0px"}}>Endereço de entrega</Typography>
                <TextField 
                  error={error}
                  id="demo-helper-text-misaligned-no-helper" 
                  label="Cep" 
                  onChange={(e)=>{setCampo(e.target.value.replace("-",""))}}  
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
                  {preenchido && <div>
                    <TextField 
                      label='Numero'
                      value={numero} 
                      sx={{margin:"10px 0px"}}
                      size='small' 
                      onChange={e=>setNumero(e.target.value)}

                  />  
                  </div>}
              </div>
              
          </div>
           <div className='botoesCarrinho'>
              <Button style={{margin:'10px 0px'}} variant='outlined' size='small' color='error' onClick={()=> navigate('/')}>
                Escolher mais produtos
              </Button>  
              <ModalFinalizarCompra 
                setPreenchido={setPreenchido}
                preenchido={preenchido}
                setError={setError}
                rua={rua}
                cidade={cidade}
                uf={uf}
                complemento={complemento}  
                total={total}
                numero={numero}
                setNumero={setNumero}
              />
           </div>
        </div>
    </div>
  )
}
