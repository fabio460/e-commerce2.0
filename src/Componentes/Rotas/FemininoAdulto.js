import { ListItemButton, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import AppBarBootstrap from '../AppBar/AppBarBootstrap'
import BtnFlutuante from '../Home/btnFlutuante'
import Cards from '../ListaProdutos/Cards'
import CardsCarregando from '../ListaProdutos/CardsCarregando'
import Paginacao from '../ListaProdutos/Paginação'
import SideBarRotas from '../SideBar/SideBarRotas'
import BtnModalDaNavegacao from './BtnModalNavegacao'
import Navegacao from './Navegacao'
import './Rotas.css'
export default function Feminino() {
  var lista = JSON.parse(localStorage.getItem('lista'))
  let aux = []
  let listaSideBar =[]
  const [list,setList]=useState([]) 
  const [listaSideBarLi,setListaSidebar]=useState([])
  let busca = useSelector(state=>state.SearchReducer.search)
  const dispath = useDispatch()
  const [Display,setDisplay]=useState('block')


  async function getList(){
    const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
    p.filter(elem=>{
      if(elem.sexo === 'feminino' && elem.idade === 'adulto'){
        aux.push(elem)
        listaSideBar.push(elem.tipo)
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
    listaSideBar = [ ...new Set(listaSideBar)]
    setListaSidebar(listaSideBar)
    setDisplay('none')
  }

  const getTipo = (elem)=>{
      
      let auxTipo=[]
      setList(aux)
      aux.filter(item=>{
        if (item.tipo === elem) {
          auxTipo.push(item)
        }
      })
      setList(auxTipo)
      dispath({
        type:'indice',
        payload:{
            inicio:0,
            fim:8
        }
      })
  }
  
  useEffect(()=>{
    getList()
    
  },[busca])






  const [tipo,setTipo]=useState('');
  switch (tipo) {

    case 'saia':
      list.filter(elem=>{
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

      case 'jeans':
        lista.filter(elem=>{
          if(elem.sexo === 'feminino' && elem.idade === 'adulto' && elem.tipo === 'jeans'){
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
  //lista = aux
  //setList(lista)
  localStorage.setItem('tamanhoDaLista',list.length)
  const posicao = useSelector(state=>state.IndicePaginacaoReducer)
  const inicio = posicao.inicio
  const fim = posicao.fim
 
  return (
     <div>
        <AppBarBootstrap/>
          <Navegacao 
            setTipo={setTipo}
            calcas={'calça'}
            shorts={'shorts'}
            blusas={'blusa'}
            sapatos={'sapato'}
            vestidos={'vestidos'}
            saia={'saia'}
            sexo={'feminino'}
            idade={'adulto'}
            tudo={'tudo'}
            jeans={'jeans'}
          />
          <div className='modalNavegacao'>
            <BtnModalDaNavegacao listaSideBarLi={listaSideBarLi} getTipo={getTipo}/>
          </div>
        <div className='containerRotas '>
          <div className='sidebarRotas'>
             {listaSideBarLi.map((elem,key)=>{
              return <div onClick={()=> getTipo(elem)}>
                <ListItemButton>
                    <ListItemText primary={elem} />
                 </ListItemButton>
              </div>
             })}
          </div>
          <div className='listaRotas'>
              <div style={{display:Display}} >
                  <CardsCarregando/>
              </div>
              <div className='listaProdutos'>
                  {list.map((item,key)=>{
                    return (key >= inicio && key < fim) && <Cards item={item} key={key}/>
                  })}
              </div>
              <div className='paginacao'><Paginacao/></div>
              <BtnFlutuante/>
            </div>
        </div>
     </div>
  )
}
