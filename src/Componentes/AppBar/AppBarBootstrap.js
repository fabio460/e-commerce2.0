import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AppBarMui from './AppBar'

import AppBar from './AppBar'
import './AppBar.css'
export default function AppBarBootstrap() {
  const navigate = useNavigate()  
  const dispath = useDispatch()
  const mudarRota = async(id) =>{
    const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
    localStorage.setItem('lista',JSON.stringify(p))
    localStorage.setItem('tamanhoDaLista',p.length)
    dispath({
        type:"search",
        payload:{search:""}
    })
    dispath({
        type:'indice',
        payload:{
            inicio:0,
            fim:8
        }
      })
    navigate(id);
    window.scrollTo(0,0)
  }
  return (
    <div >
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid container" style={{padding:"0% 3%"}}>
            <a class="navbar-brand" href="/">Loja de roupas</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <div class="nav-link active" aria-current="page" onClick={()=>navigate('/')}>Home</div>
                </li>
                <li class="nav-item">
                   <div id='/masculinoAdulto' class="nav-link" onClick={e=> mudarRota(e.target.id)}>Masculino</div>
                </li>
                <li class="nav-item">
                   <div class="nav-link" id='/femininoAdulto' onClick={e=> mudarRota(e.target.id)}>Feminino</div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Infantil
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><div class="dropdown-item" id='/InfantilMasculino' onClick={e=> mudarRota(e.target.id)}>Meninos</div></li>
                        <li><div class="dropdown-item" id='/InfantilFeminino' onClick={e=> mudarRota(e.target.id)}>Meninas</div></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><div class="dropdown-item" >Cal??ados</div></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Plus Sise
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><div class="dropdown-item" id='/plusSise' onClick={e=> mudarRota(e.target.id)}>Masculino</div></li>
                        <li><div class="dropdown-item" id='/PlusSiseFeminino' onClick={e=> mudarRota(e.target.id)}>Feminino</div></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cal??ados
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><div class="dropdown-item" id='/sapato' onClick={e=> mudarRota(e.target.id)}>Sapatos</div></li>
                        <li><div class="dropdown-item" id='/tenis' onClick={e=> mudarRota(e.target.id)}>T??nis</div></li>
                    </ul>
                </li>
            </ul>
            <form class="d-flex">
               
                <AppBarMui/>
            </form>
            </div>
        </div>
        </nav>
    </div>
  )
}
