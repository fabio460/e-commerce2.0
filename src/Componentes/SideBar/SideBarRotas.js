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
import { useDispatch } from 'react-redux';

export default function SideBarRotas({calcas,shorts,cropped,blusas,sapatos,vestidos,vestido,sexo,idade,bermudas,tenis,setTipo,saia,tudo,camisas,jeans}) {
  const dispath = useDispatch()
  const alterarTipo = (tipo)=>{
    setTipo(tipo)
    dispath({
      type:'indice',
      payload:{
        
        inicio:0,
        fim:8
      }
    }) 
  }
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>

      <MenuList>

      {tudo && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=> setTipo('tudo')}>{tudo}</ListItemText>
        </MenuItem>
        </div> }

        {calcas && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=>alterarTipo('calça')}>{calcas}</ListItemText>
        </MenuItem>
        </div> }

        {shorts && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=>alterarTipo('shorts')}>{shorts}</ListItemText>
        </MenuItem>
        </div> }

        {blusas && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=>alterarTipo('blusa')}>{blusas}</ListItemText>
        </MenuItem>
        </div> }

        {vestidos && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={ ()=>alterarTipo('vestidos') }>{vestidos}</ListItemText>
        </MenuItem>
        </div> }

        {vestido && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={ ()=>alterarTipo('vestido') }>{vestido}</ListItemText>
        </MenuItem>
        </div> }

        {saia && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=>alterarTipo('saia')}>{saia}</ListItemText>
        </MenuItem>
        </div> }

        {sapatos && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=>alterarTipo('sapato')}>{sapatos}</ListItemText>
        </MenuItem>
        </div> }

        {cropped && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=>alterarTipo('cropped')}>{cropped}</ListItemText>
        </MenuItem>
        </div> }

        {bermudas && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=>alterarTipo('bermudas')}>{bermudas}</ListItemText>
        </MenuItem>
        </div> }

        {tenis && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=>alterarTipo('tenis')}>{tenis}</ListItemText>
        </MenuItem>
        </div> }

        {camisas && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=>alterarTipo('camisas')}>{camisas}</ListItemText>
        </MenuItem>
        </div> }

        {jeans && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=>alterarTipo('jeans')}>{jeans}</ListItemText>
        </MenuItem>
        </div> }
    
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
