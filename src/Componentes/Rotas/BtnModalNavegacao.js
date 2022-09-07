import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Chip, Fab } from '@mui/material';
import { DeleteOutlined, NavigateNext } from '@mui/icons-material';

export default function BtnModalDaNavegacao({listaSideBarLi,getTipo}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
            {listaSideBarLi.map((elem,key)=>{
              return <div onClick={()=> getTipo(elem)}>
                    <ListItem key={key} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {key % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={elem} />
                        </ListItemButton>
                    </ListItem>
              </div>
             })}
      </List>
   
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>Categorias</Button> */}
          {/* <Chip
            label={<ArrowBackIcon />}
            deleteIcon={<ArrowBackIcon />}
            variant="outlined"
            
          /> */}
        
          <Fab color="primary" aria-label="add" onClick={toggleDrawer(anchor, true)}>
            <ArrowBackIcon />
          </Fab>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
