import { Button, ListItemButton, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppBarBootstrap from '../AppBar/AppBarBootstrap'
import BtnFlutuante from '../Home/btnFlutuante'
import Cards from '../ListaProdutos/Cards'
import CardsCarregando from '../ListaProdutos/CardsCarregando'
import Paginacao from '../ListaProdutos/Paginação'
import SideBarRotas from '../SideBar/SideBarRotas'
import BtnModalDaNavegacao from './BtnModalNavegacao'
import Navegacao from './Navegacao'
import './Rotas.css'
export default function InfantilMasculino() {
  var lista = JSON.parse(localStorage.getItem('lista'))
  let aux = []
  const [tipo,setTipo]=React.useState('');
  const [Display,setDisplay]=useState('block')



  let listaSideBar =[]
  const [list,setList]=useState([]) 
  const [listaSideBarLi,setListaSidebar]=useState([])
  let busca = useSelector(state=>state.SearchReducer.search)
  const dispath = useDispatch()


  async function getList(){
    const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
    p.filter(elem=>{
      if(elem.sexo === 'masculino' && elem.idade === 'infantil'){
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
  localStorage.setItem('tamanhoDaLista',list.length)
  const posicao = useSelector(state=>state.IndicePaginacaoReducer)
  const inicio = posicao.inicio
  const fim = posicao.fim
  return (
     <div >
        <AppBarBootstrap/>
        <Navegacao 
            setTipo={setTipo}
            calcas={'calça'}
            tudo={'tudo'}
            camisas={'camisas'}
            tenis={'tenis'}
            sexo={'masculino'}
            idade={'adulto'}
            bermudas={'bermudas'}

        />         
      <div className='modalNavegacao'>
        <BtnModalDaNavegacao listaSideBarLi={listaSideBarLi} getTipo={getTipo}/>
      </div>

        <div className='containerRotas '>
          <div className='sidebarRotas'>
          {/* <SideBarRotas 
              setTipo={setTipo}
              calcas={'Calças'}
              tudo={'tudo'}
              camisas={'camisas'}
              tenis={'tênis'}
              sexo={'masculino'}
              idade={'adulto'}
              bermudas={'bermudas'}
             /> */}
          
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
