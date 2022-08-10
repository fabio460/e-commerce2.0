import React from 'react'
import { useSelector } from 'react-redux'
import AppBarBootstrap from '../AppBar/AppBarBootstrap'
import Cards from '../ListaProdutos/Cards'
import Paginacao from '../ListaProdutos/Paginação'
import Navegacao from './Navegacao'
import './Rotas.css'
export default function InfantilMasculino() {
  var lista = JSON.parse(localStorage.getItem('lista'))
  let aux = []
  lista.filter(elem=>{
    if(elem.sexo === 'masculino' && elem.idade === 'infantil'){
      aux.push(elem)
    }
    return elem
  })
  lista = aux
  localStorage.setItem('tamanhoDaLista',lista.length)
  const posicao = useSelector(state=>state.IndicePaginacaoReducer)
  const inicio = posicao.inicio
  const fim = posicao.fim
  return (
     <div>
        <AppBarBootstrap/>
        <Navegacao sexo={'Masculino'} idade={'infantil'}/>
        <div className='containerRotas'>
          <div className='sidebarRotas'>sidebar</div>
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
