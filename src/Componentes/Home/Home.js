import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

import ListaProdutos from '../ListaProdutos/ListaProdutos';
import Paginacao from '../ListaProdutos/Paginação';
import './Home.css'
import SideBar from '../SideBar/SideBar';
import Caroulsel from './Caroulsel';
import AppBarBootstrap from '../AppBar/AppBarBootstrap';
import BtnFlutuante from './btnFlutuante';
import { useDispatch } from 'react-redux';
import { Link, Typography } from '@mui/material';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Home(props) {
  const ContainerStyle = {
    display:'grid',
    gridTemplateColumns:'1fr 3fr',
    gap:'15px',
  
    marginTop:'20px',
    '@media (max-width:500px)':{
      gridTemplateColumns:'1fr'
    }
  }
  const dispath = useDispatch()
  const [carrinhoList,setCarrinhoList]=useState([])
  async function getCarrinho() {
    const l =await fetch('https://api-e-commerce.vercel.app/listarCarrinho').then(r=>r.json())
    
    setCarrinhoList(l)
    dispath({
      type:'tamanhoDoCarrinho',
      payload:{tamanhoDoCarrinho:l.length}
    })
    
  } 

  useEffect(()=>{
    getCarrinho()

  },[])
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{background:'inherit'}}>
            <AppBarBootstrap/>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <div >
        <Caroulsel/>
        <div class='container'>
          <Box sx={ContainerStyle}>
            <div className='sidebar'><SideBar/></div>
            <div className='listaDeProdutos'>
              <ListaProdutos />
              <div className='paginacao'><Paginacao/></div>
              <BtnFlutuante/>
            </div>      
          </Box> 
        </div>
        <footer>
           <Typography>
              <Link href='https://github.com/fabio460' sx={{cursor:'pointer'}}>Github</Link>
           </Typography>
           <Typography>
              <Link href='https://fabio460.github.io/Portifolio/' sx={{cursor:'pointer'}}>Portifolio</Link>
           </Typography>
           <Typography>
              <Link href='https://www.linkedin.com/in/fabio-oliveira-b2589163/' sx={{cursor:'pointer'}}>Linkedin</Link>
           </Typography>
        </footer>
      </div>
    </React.Fragment>
  );
}
