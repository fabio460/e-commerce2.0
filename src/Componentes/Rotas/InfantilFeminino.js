import React from 'react'
import { useSelector } from 'react-redux'
import AppBarBootstrap from '../AppBar/AppBarBootstrap'
import BtnFlutuante from '../Home/btnFlutuante'
import Cards from '../ListaProdutos/Cards'
import Paginacao from '../ListaProdutos/Paginação'
import SideBarRotas from '../SideBar/SideBarRotas'
import Navegacao from './Navegacao'
import './Rotas.css'
export default function InfantilFeminino() {
  var lista = JSON.parse(localStorage.getItem('lista'))
  let aux = []


  const [tipo,setTipo]=React.useState('');


  switch (tipo) {

    case 'shorts':
      lista.filter(elem=>{
        if(elem.sexo === 'feminino' && elem.idade === 'infantil' && elem.tipo === 'shorts'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

    case 'blusa':
      lista.filter(elem=>{
        if(elem.sexo === 'feminino' && elem.idade === 'infantil' && elem.tipo === 'blusa'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

    case 'calça':
      lista.filter(elem=>{
        if(elem.sexo === 'feminino' && elem.idade === 'infantil' && elem.tipo === 'calça'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

    case 'camisas':
      lista.filter(elem=>{
        if(elem.sexo === 'feminino' && elem.idade === 'infantil' && elem.tipo === 'camisas'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

    case 'vestido':
      lista.filter(elem=>{
        if(elem.sexo === 'feminino' && elem.idade === 'infantil' && elem.tipo === 'vestido'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

    case 'sapato':
      lista.filter(elem=>{
        if(elem.sexo === 'feminino' && elem.idade === 'infantil' && elem.tipo === 'sapato'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

  default:
    lista.filter(elem=>{
      if(elem.sexo === 'feminino' && elem.idade === 'infantil'){
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
        <Navegacao sexo={'Feminino'} idade={'infantil'}/>
        <div className='containerRotas'>
          <div className='sidebarRotas'>
          <SideBarRotas 
              setTipo={setTipo}
              calcas={'Calças'}
              tudo={'tudo'}
              blusas={'blusa'}
              
              sexo={'feminino'}
              idade={'adulto'}
              shorts={'shorts'}
              vestido={'vestido'}
              sapatos={'sapato'}
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
