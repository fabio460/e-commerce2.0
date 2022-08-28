import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppBarBootstrap from '../AppBar/AppBarBootstrap'
import Cards from '../ListaProdutos/Cards'
import Paginacao from '../ListaProdutos/Paginação'
import SideBarRotas from '../SideBar/SideBarRotas'
import Navegacao from './Navegacao'
import './Rotas.css'
export default function Feminino() {
  var lista = JSON.parse(localStorage.getItem('lista'))
  let aux = []

  const [tipo,setTipo]=useState('');
  switch (tipo) {

    case 'saia':
      lista.filter(elem=>{
        if(elem.sexo === 'feminino' && elem.idade === 'adulto' && elem.tipo === 'saia'){
          aux.push(elem)
        }
        return elem
      })
      
      break;

      case 'shorts':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino' && elem.idade === 'adulto' && elem.tipo === 'shorts'){
            aux.push(elem)
          }
          return elem
        })
        
      break;

      case 'blusa':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino' && elem.idade === 'adulto' && elem.tipo === 'blusa'){
            aux.push(elem)
          }
          return elem
        })
        
      break;

      case 'calça':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino' && elem.idade === 'adulto' && elem.tipo === 'calça'){
            aux.push(elem)
          }
          return elem
        })
        
      break;

      case 'camiseta':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino' && elem.idade === 'adulto' && elem.tipo === 'camiseta'){
            aux.push(elem)
          }
          return elem
        })
        
      break;

      case 'vestidos':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino' && elem.idade === 'adulto' && elem.tipo === 'vestidos'){
            aux.push(elem)
          }
          return elem
        })
        
      break;

      case 'sapato':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino' && elem.idade === 'adulto' && elem.tipo === 'sapato'){
            aux.push(elem)
          }
          return elem
        })
        
      break;
  
    default:
      lista.filter(elem=>{
        if(elem.sexo === 'feminino' && elem.idade === 'adulto'){
          aux.push(elem)
        }
        return elem
      })
      break;
  }



  lista = aux


  localStorage.setItem('tamanhoDaLista',lista.length)
  
  const posicao = useSelector(state=>state.IndicePaginacaoReducer)
  const inicio = posicao.inicio
  const fim = posicao.fim

  return (
     <div>
        <AppBarBootstrap/>
        <Navegacao sexo={'Feminino'} idade={'Adulto'}/>
        <div className='containerRotas'>
          <div className='sidebarRotas'>
            <SideBarRotas 
              setTipo={setTipo}
              calcas={'Calças'}
              shorts={'Shorts'}
              blusas={'Blusas'}
              sapatos={'Sapatos'}
              vestidos={'Vestidos'}
              saia={'saia'}
              sexo={'feminino'}
              idade={'adulto'}
              tudo={'tudo'}
              // bermudas={'bermudas'}
             />
          </div>
          <div className='listaRotas'>
              <div className='listaProdutos'>
                  {lista.map((item,key)=>{
                    return (key > inicio && key <= fim) && <Cards item={item} key={key}/>
                  })}
              </div>
              <div className='paginacao'><Paginacao/></div>
            </div>
        </div>
     </div>
  )
}
