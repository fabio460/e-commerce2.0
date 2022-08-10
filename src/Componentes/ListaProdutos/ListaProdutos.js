import Cards from './Cards'
import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './ListaProdutos.css'
import CarregandoCards from './CarregandoCards'
export default function ListaProdutos() {
   const [list,setList]=useState([])  
   const [Display,setDisplay]=useState('block')
   async function getList(){
    try {
      const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
      setList(p)
      localStorage.setItem('lista',JSON.stringify(p))
      localStorage.setItem('tamanhoDaLista',p.length)
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
   },[])
   const posicao = useSelector(state=>state.IndicePaginacaoReducer)
   const inicio = posicao.inicio
   const fim = posicao.fim
  return (
   <div>
    <div style={{display:Display}} ><CarregandoCards/></div>
     <div className='listaProdutos'>
        
        {list.map((item,key)=>{
           return (key > inicio && key <= fim) && <Cards item={item} key={key}/>
        })}
    </div>
   </div>
  )
}
