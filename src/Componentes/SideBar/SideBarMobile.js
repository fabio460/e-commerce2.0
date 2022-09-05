import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useDispatch } from 'react-redux';
import { ListItemIcon, ListItemText } from '@mui/material';
import { ContentCut } from '@mui/icons-material';



export default function SideBarMobile({
     calcas,shorts,cropped,blusas,sapatos,vestidos,vestido,sexo,idade,bermudas,tenis,setTipo,saia,tudo,camisas,jeans
    }) {
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
  
    let options = [
        tudo && <div>
            <div onClick={()=> setTipo('tudo')}>{tudo}</div>
          </div> 
          ,
          calcas && <div>
            <div onClick={()=>alterarTipo('calça')}>{calcas}</div>
          </div> ,
  
          shorts && <div>
            <div onClick={()=>alterarTipo('shorts')}>{shorts}</div>
          </div> ,
  
          blusas && <div>
             <div onClick={()=>alterarTipo('blusa')}>{blusas}</div>
          </div> ,
  
          vestidos && <div>
            <div onClick={ ()=>alterarTipo('vestidos') }>{vestidos}</div>
          </div> ,
  
          vestido && <div>
            <div onClick={ ()=>alterarTipo('vestido') }>{vestido}</div>
          </div> ,
  
          saia && <div>
            <div onClick={()=>alterarTipo('saia')}>{saia}</div>
          </div> ,
  
          sapatos && <div>
             <div onClick={()=>alterarTipo('sapato')}>{sapatos}</div>
          </div> ,
  
          cropped && <div>
             <div onClick={()=>alterarTipo('cropped')}>{cropped}</div>
          </div> ,
  
          bermudas && <div>
             <div onClick={()=>alterarTipo('bermudas')}>{bermudas}</div>
          </div> ,
  
          tenis && <div>
             <div onClick={()=>alterarTipo('tenis')}>{tenis}</div>
          </div> ,
  
          camisas && <div>
            <div onClick={()=>alterarTipo('camisas')}>{camisas}</div>
          </div> ,
  
          jeans && <div>
           <div onClick={()=>alterarTipo('jeans')}>{jeans}</div>
          </div> ,
    ];  
    let aux = []
    options.forEach(element => {
        if (element) {
            //console.log(element.props.children.props.children)
            aux.push(<div onClick={()=>alterarTipo((element.props.children.props.children).toString())}>{element.props.children.props.children}</div>)
        }else{
            console.log(null)
        }
    });
    //console.log(aux)
    //console.log(options)
    options = aux
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" size='small'>
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                    //   disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
