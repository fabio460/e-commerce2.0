import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppBarBootstrap from '../AppBar/AppBarBootstrap'
import BtnFlutuante from '../Home/btnFlutuante'
import Cards from '../ListaProdutos/Cards'
import Paginacao from '../ListaProdutos/Paginação'
import Navegacao from './Navegacao'
import './Rotas.css'
export default function Masculino() {
  var lista = JSON.parse(localStorage.getItem('lista'))
  const dispath = useDispatch()
  let aux = []
  let search = []
  const [list,setList]=useState([]) 
  let busca = useSelector(state=>state.SearchReducer.search)


  lista.filter(elem=>{
    if(elem.sexo === 'masculino'){
      aux.push(elem)
    }
    return elem 
  })

  async function getList(){
    const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
    p.filter(elem=>{
      if(elem.sexo === 'masculino' || elem.sexo === 'masculino plus size'){
        aux.push(elem)
      }
      return elem 
    })
    setList(aux)
    dispath({
      type:'lista',
      payload:{lista:aux}
    })
    let search = []
    aux.filter(e=>{
      if (e.nome.includes(busca)) {
        search.push(e)
      }
    })
    setList(search)
    if(busca === undefined){
        setList(aux)
    }
    
  }


  useEffect(()=>{
    getList()
    
  },[busca])
  lista = aux
  localStorage.setItem('tamanhoDaLista',list.length)
  const posicao = useSelector(state=>state.IndicePaginacaoReducer)
  const inicio = posicao.inicio
  const fim = posicao.fim
  return (
     <div>
        <AppBarBootstrap/>
        <Navegacao sexo={'Masculino'} idade={''}/>
        <div className='containerRotas'>
          <div className='sidebarRotas'>sidebar</div>
          <div className='listaRotas'>
              <div className='listaProdutos'>
                  {list.map((item,key)=>{
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
