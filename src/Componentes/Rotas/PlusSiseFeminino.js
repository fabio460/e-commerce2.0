
import React from 'react'
import { useSelector } from 'react-redux'
import AppBarBootstrap from '../AppBar/AppBarBootstrap'
import BtnFlutuante from '../Home/btnFlutuante'
import Cards from '../ListaProdutos/Cards'

import Paginacao from '../ListaProdutos/Paginação'
import SideBarRotas from '../SideBar/SideBarRotas'
import Navegacao from './Navegacao'

export default function PlusSiseFeminino() {

  var lista = JSON.parse(localStorage.getItem('lista'))
  let aux = []



  const [tipo,setTipo]=React.useState('');
  switch (tipo) {

    case 'saia':
      lista.filter(elem=>{
        if(elem.sexo === 'feminino plus size' && elem.idade === 'adulto' && elem.tipo === 'saia'){
          aux.push(elem)
        }
        return elem
      })
      
      break;

      case 'shorts':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino plus size' && elem.idade === 'adulto' && elem.tipo === 'shorts'){
            aux.push(elem)
          }
          return elem
        })
        
      break;

      case 'blusa':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino plus size' && elem.idade === 'adulto' && elem.tipo === 'blusa'){
            aux.push(elem)
          }
          return elem
        })
        
      break;

      case 'calça':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino plus size' && elem.idade === 'adulto' && elem.tipo === 'calça'){
            aux.push(elem)
          }
          return elem
        })
        
      break;

      case 'camiseta':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino plus size' && elem.idade === 'adulto' && elem.tipo === 'camiseta'){
            aux.push(elem)
          }
          return elem
        })
        
      break;

      case 'vestidos':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino plus size' && elem.idade === 'adulto' && elem.tipo === 'vestido'){
            aux.push(elem)
          }
          return elem
        })
        
      break;

      case 'cropped':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino plus size' && elem.idade === 'adulto' && elem.tipo === 'cropped'){
            aux.push(elem)
          }
          return elem
        })
        
      break;

      case 'jeans':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino plus size' && elem.idade === 'adulto' && elem.tipo === 'jeans'){
            aux.push(elem)
          }
          return elem
        })
        
      break;
  
    default:
      lista.filter(elem=>{
        if(elem.sexo === 'feminino plus size' && elem.idade === 'adulto'){
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
    <Navegacao 
       idade={'feminino plus size'}
       calcas={'calça'}
              
              blusas={'blusa'}
              cropped={'cropped'}
              vestidos={'vestidos'}
              setTipo={setTipo}
              sexo={'feminino'}
              tudo={'tudo'}
    />
    <div className='containerRotas'>
      <div className='sidebarRotas'>
      <SideBarRotas 
              setTipo={setTipo}
              calcas={'Calças'}
              
              blusas={'Blusas'}
              cropped={'cropped'}
              vestidos={'Vestidos'}
             
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
          <BtnFlutuante/>
        </div>
    </div>
 </div>
  )
}
