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

export default function SideBarRotas({calcas,shorts,blusas,sapatos,vestidos,sexo,idade,bermudas,tenis,setTipo,saia,tudo}) {
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
          <ListItemText onClick={()=> setTipo('calça')}>{calcas}</ListItemText>
        </MenuItem>
        </div> }

        {shorts && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=> setTipo('shorts')}>{shorts}</ListItemText>
        </MenuItem>
        </div> }

        {blusas && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=> setTipo('blusa')}>{blusas}</ListItemText>
        </MenuItem>
        </div> }

        {vestidos && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=> setTipo('vestidos')}>{vestidos}</ListItemText>
        </MenuItem>
        </div> }

        {saia && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=> setTipo('saia')}>{saia}</ListItemText>
        </MenuItem>
        </div> }

        {sapatos && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={()=> setTipo('sapato')}>{sapatos}</ListItemText>
        </MenuItem>
        </div> }

        {bermudas && <div>
          <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>{bermudas}</ListItemText>
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
