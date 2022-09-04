import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconesLikesComentarios from './iconesLikesComentarios';
import { useNavigate } from 'react-router-dom';

export default function Cards({item}) {
  const cardStyle ={ 
    width: '100%',
    margin:'auto',
    height:400 ,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    '@media (max-width:500px)':{
      height:550
    }
  } 
  const CardMediaStyle = {
    height:'220px',
    '@media (max-width:500px)':{
      height:'380px',
    }
  }
  const navigate = useNavigate()
  const getItem = ()=>{
    localStorage.setItem('produto',JSON.stringify(item))
    navigate('/telaDeCompras')
    
  }
  return (
    <Card sx={cardStyle}>
      <CardActionArea sx={{background:'',height:"",display:'flex',justifyContent:'space-between', flexDirection:'column'}}>
        <CardMedia
          component="img"
          sx={CardMediaStyle}
          image={item.imagem1}
          alt={item.nome}
          onClick={getItem}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" color='red'>
            {item.valor}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.nome}
          </Typography>   
        </CardContent>

      </CardActionArea>
      <Typography sx={{display:'flex',justifyContent:'flex-end'}}>
          <IconesLikesComentarios/>
      </Typography>
    </Card>
  );
}
