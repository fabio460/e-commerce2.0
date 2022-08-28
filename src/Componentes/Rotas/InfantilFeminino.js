import React from 'react'
import { useSelector } from 'react-redux'
import AppBarBootstrap from '../AppBar/AppBarBootstrap'
import Cards from '../ListaProdutos/Cards'
import Paginacao from '../ListaProdutos/Paginação'
import SideBarRotas from '../SideBar/SideBarRotas'
import Navegacao from './Navegacao'
import './Rotas.css'
export default function InfantilFeminino() {
  var lista = JSON.parse(localStorage.getItem('lista'))
  let aux = []
  lista.filter(elem=>{
    if(elem.sexo === 'feminino' && elem.idade === 'infantil'){
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
        <Navegacao sexo={'Feminino'} idade={'infantil'}/>
        <div className='containerRotas'>
          <div className='sidebarRotas'><SideBarRotas/></div>
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
