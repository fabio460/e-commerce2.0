import React from 'react'
import { useSelector } from 'react-redux'
import AppBarBootstrap from '../AppBar/AppBarBootstrap'
import BtnFlutuante from '../Home/btnFlutuante'
import Cards from '../ListaProdutos/Cards'
import Paginacao from '../ListaProdutos/Paginação'
import SideBarRotas from '../SideBar/SideBarRotas'
import Navegacao from './Navegacao'
import './Rotas.css'
export default function InfantilMasculino() {
  var lista = JSON.parse(localStorage.getItem('lista'))
  let aux = []
  const [tipo,setTipo]=React.useState('');


  switch (tipo) {

    case 'shorts':
      lista.filter(elem=>{
        if(elem.sexo === 'masculino' && elem.idade === 'infantil' && elem.tipo === 'shorts'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

    case 'blusa':
      lista.filter(elem=>{
        if(elem.sexo === 'masculino' && elem.idade === 'infantil' && elem.tipo === 'blusa'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

    case 'calça':
      lista.filter(elem=>{
        if(elem.sexo === 'masculino' && elem.idade === 'infantil' && elem.tipo === 'calça'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

    case 'camisas':
      lista.filter(elem=>{
        if(elem.sexo === 'masculino' && elem.idade === 'infantil' && elem.tipo === 'camisas'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

    case 'bermudas':
      lista.filter(elem=>{
        if(elem.sexo === 'masculino' && elem.idade === 'infantil' && elem.tipo === 'bermudas'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

    case 'tenis':
      lista.filter(elem=>{
        if(elem.sexo === 'masculino' && elem.idade === 'infantil' && elem.tipo === 'tênis'){
          aux.push(elem)
        }
        return elem
      })
      
    break;

  default:
    lista.filter(elem=>{
      if(elem.sexo === 'masculino' && elem.idade === 'infantil'){
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
                        setTipo={setTipo}
                        calcas={'Calças'}
                        tudo={'tudo'}
                        camisas={'camisas'}
                        tenis={'tênis'}
                        sexo={'masculino'}
                        idade={'adulto'}
                        bermudas={'bermudas'}

        />
        <div className='containerRotas'>
          <div className='sidebarRotas'>
          <SideBarRotas 
              setTipo={setTipo}
              calcas={'Calças'}
              tudo={'tudo'}
              camisas={'camisas'}
              tenis={'tênis'}
              sexo={'masculino'}
              idade={'adulto'}
              bermudas={'bermudas'}
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
