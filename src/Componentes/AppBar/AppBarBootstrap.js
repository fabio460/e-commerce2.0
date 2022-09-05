import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AppBarMui from './AppBar'
import AppBar from './AppBar'
import './AppBar.css'
export default function AppBarBootstrap() {
  const navigate = useNavigate()  
  const dispath = useDispatch()
  function LimparBusca() {
    
  }
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid" style={{padding:"0% 3%"}}>
            <a class="navbar-brand" href="/">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <div class="nav-link active" aria-current="page" onClick={()=>navigate('/')}>Home</div>
                </li>
                <li class="nav-item">
                   <div class="nav-link" onClick={async()=>{
                        const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
                        localStorage.setItem('lista',JSON.stringify(p))
                        localStorage.setItem('tamanhoDaLista',p.length)
                        dispath({
                            type:"search",
                            payload:{search:""}
                        })
                        navigate('/masculinoAdulto');
                    }}>Masculino</div>
                </li>
                <li class="nav-item">
                   <div class="nav-link" onClick={async()=>{
                      navigate('/femininoAdulto')
                      const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
                      localStorage.setItem('lista',JSON.stringify(p))
                      localStorage.setItem('tamanhoDaLista',p.length)
                      dispath({
                          type:"search",
                          payload:{search:""}
                      })
                   }}>Feminino</div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Infantil
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><div class="dropdown-item" onClick={async()=>{
                            navigate('/InfantilMasculino')
                            const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
                            localStorage.setItem('lista',JSON.stringify(p))
                            localStorage.setItem('tamanhoDaLista',p.length)
                            dispath({
                                type:"search",
                                payload:{search:""}
                            })    
                        }}>Meninos</div></li>
                        <li><div class="dropdown-item" onClick={async()=>{
                            navigate('/InfantilFeminino')
                            const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
                            localStorage.setItem('lista',JSON.stringify(p))
                            localStorage.setItem('tamanhoDaLista',p.length)
                            dispath({
                                type:"search",
                                payload:{search:""}
                            })    
                        }}>Meninas</div></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><div class="dropdown-item" >Calçados</div></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Plus Sise
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><div class="dropdown-item" onClick={()=>navigate('/plusSise')}>Masculino</div></li>
                        <li><div class="dropdown-item" onClick={()=>navigate('/PlusSiseFeminino')}>Feminino</div></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Calçados
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><div class="dropdown-item" onClick={async()=>{
                            navigate('/sapato')
                            const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
                            localStorage.setItem('lista',JSON.stringify(p))
                            localStorage.setItem('tamanhoDaLista',p.length)
                            dispath({
                                type:"search",
                                payload:{search:""}
                            })
                        }}>Sapatos</div></li>
                        <li><div class="dropdown-item" onClick={async()=>{
                            navigate('/tenis')
                            const p = await fetch('https://api-e-commerce.vercel.app/listar').then(res=>res.json())
                            localStorage.setItem('lista',JSON.stringify(p))
                            localStorage.setItem('tamanhoDaLista',p.length)
                            dispath({
                                type:"search",
                                payload:{search:""}
                            })    
                        }}>Tênis</div></li>
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
