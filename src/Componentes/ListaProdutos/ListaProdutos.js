import Cards from './Cards'
import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './ListaProdutos.css'
import CarregandoCards from './CarregandoCards'
import CardsCarregando from './CardsCarregando'
export default function ListaProdutos() {
   const [list,setList]=useState([])  
   const [Display,setDisplay]=useState('block')
   let aux = []
   let busca = useSelector(state=>state.SearchReducer.search)
   async function getList(){
    try {
      const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
      setList(p)
      localStorage.setItem('lista',JSON.stringify(p))
      localStorage.setItem('tamanhoDaLista',p.length)
      p.map(e=>{
        if (e.nome.includes(busca)) {
          aux.push(e)
        }
      })
      setList(aux)
      localStorage.setItem('lista',JSON.stringify(aux))
      localStorage.setItem('tamanhoDaLista',aux.length)
      

      if (list.length < 1 ) {
        setList(p)
        localStorage.setItem('lista',JSON.stringify(p))
        localStorage.setItem('tamanhoDaLista',p.length)
        dispath({
          type:"search",
          payload:{search:""}
        })
      }

      if (busca === "") {
        setList(p)
        localStorage.setItem('lista',JSON.stringify(p))
        localStorage.setItem('tamanhoDaLista',p.length)
      }
      
      dispath({
        type:'indice',
        payload:{
          lista:p.length,
          inicio:0,
          fim:8
        }
      })
      setDisplay('none')
    } catch (error) {
      console(error)
      setTimeout(() => {
        window.location.reload()
      }, 1000);
      
    }
   }  
   const dispath = useDispatch()
   useEffect(()=>{
     getList()
   },[busca])
   const posicao = useSelector(state=>state.IndicePaginacaoReducer)
   const inicio = posicao.inicio
   const fim = posicao.fim
  return (
   <div>
    <div style={{display:Display}} ><CardsCarregando/></div>
     <div className='listaProdutos'>
        {list.map((item,key)=>{
           return (key > inicio && key <= fim) && <Cards item={item} key={key}/>
        })}
    </div>
   </div>
  )
}
