import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import {useNavigate} from 'react-router-dom'
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { BoyRounded, DoNotStep, NextWeek, RollerSkating, Shop } from '@mui/icons-material';
export default function MenuSideBar() {
  const navigate = useNavigate() 
  return (
    <Paper sx={{ width: '100%', maxWidth: '100%' }}>
      <MenuList>
        <MenuItem onClick={()=> navigate('/masculinoAdulto')}>
          <ListItemIcon>
            <ManIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>Masculino</ListItemText>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </MenuItem>
        <MenuItem onClick={()=> navigate('/femininoAdulto')}>
          <ListItemIcon>
            <WomanIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>Feminino</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
        <MenuItem onClick={()=> navigate('/PlusSise')}>
          <ListItemIcon>
            <MaleIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>Plus Size Masculino</ListItemText>
          <Typography variant="body2" color="text.secondary">
          
          </Typography>
        </MenuItem>
        <MenuItem onClick={()=> navigate('/PlusSiseFeminino')}>
          <ListItemIcon>
            <FemaleIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>Plus Size Feminino</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
        <MenuItem onClick={()=> navigate('/InfantilMasculino')}>
          <ListItemIcon>
            <BoyIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>Infantil Masculino</ListItemText>
          <Typography variant="body2" color="text.secondary">
          
          </Typography>
        </MenuItem>
        <MenuItem onClick={()=> navigate('/InfantilFeminino')}>
          <ListItemIcon>
            <GirlIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>Infantil Feminino</ListItemText>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </MenuItem>
        <MenuItem onClick={()=> navigate('/infantil')}>
          <ListItemIcon>
            <BoyRounded fontSize="large" />
          </ListItemIcon>
          <ListItemText>Infantil </ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
        <MenuItem onClick={()=> navigate('/sapato')}>
          <ListItemIcon>
            <RollerSkating fontSize="" />
          </ListItemIcon>
          <ListItemText>Sapatos</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
        <MenuItem onClick={()=> navigate('/tenis')}>
          <ListItemIcon>
            <DoNotStep fontSize="" />
          </ListItemIcon>
          <ListItemText>Tenis</ListItemText>
          <Typography variant="body2" color="text.secondary">
          
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <NextWeek fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bolsas</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Shop fontSize="small" />
          </ListItemIcon>
          <ListItemText>Chapels</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
     
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Catalogos</ListItemText>
        </MenuItem>
      </MenuList>
      
    </Paper>
  );
}
