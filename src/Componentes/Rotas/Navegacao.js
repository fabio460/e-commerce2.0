import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

import { useNavigate } from 'react-router-dom';
import SideBarMobile from '../SideBar/SideBarMobile';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Navegacao({
   tipo,
   calcas,shorts,cropped,blusas,sapatos,vestidos,vestido,sexo,idade,bermudas,tenis,setTipo,saia,tudo,camisas,jeans
  }) {
  const navigate = useNavigate()  
  return (
    <div role="presentation" onClick={handleClick} style={{padding:"1% 3%",display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <Breadcrumbs aria-label="breadcrumb"  >
        <div className='navegacaoHomeLink'>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href="/"
            onClick={()=>navigate('/')}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
        </div>
        {sexo && 
                <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                href="/material-ui/getting-started/installation/"
                onClick={()=>navigate('/'+sexo)}
              >
                
                {sexo}
              </Link>
        }
        {idade && 
            <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
              >
                
                {idade}
              </Typography>
        }
        {tipo && 
            <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            color="text.primary"
          >
            
            {tipo}
          </Typography>
        }


      </Breadcrumbs>
      <div className='sidebarMibile'>
          <Typography>
            <SideBarMobile
                           setTipo={setTipo}
                           calcas={calcas}
                           shorts={shorts}
                           blusas={blusas}
                           sapatos={sapatos}
                           vestidos={vestidos}
                           saia={saia}
                           sexo={sexo}
                           idade={idade}
                           tudo={tudo}
                           jeans={jeans}
                           bermudas={bermudas}
                           camisas={camisas}
                           tenis={tenis}
                           cropped={cropped}
                           vestido={vestido}
            />
          </Typography>
        </div>
    </div>
  );
}
