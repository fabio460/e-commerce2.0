import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards({item}) {
  const cardStyle ={ 
    width: '100%',
    margin:'auto',
    height:320 ,
    '@media (max-width:500px)':{
      height:500
    }
  } 
  const CardMediaStyle = {
    height:'200px',
    '@media (max-width:500px)':{
      height:'400px'
    }
  }
  return (
    <Card sx={cardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={CardMediaStyle}
          image={item.imagem1}
          alt={item.nome}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color='red'>
            {item.valor}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.nome}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
