import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GitHubIcon from '@mui/icons-material/GitHub';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar, Fab } from '@mui/material';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';



import DirectionsIcon from '@mui/icons-material/Directions';
import { LinkedIn, ShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function AppBarMui() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const tamanhoDoCarrinho = useSelector(state=>state.CarrinhoDeComprasReducer.tamanhoDoCarrinho)
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  var usuarioStr = localStorage.getItem('usuarioLogado')
  const [usuario,setUsuario]=React.useState()
  
  React.useEffect(()=>{
    if (usuarioStr) {
      setUsuario(JSON.parse(usuarioStr))
     
    }
  },[])
  
  const irParaLogin = ()=>{
   navigate('/login')
   handleMenuClose()
  }

  const deslogar = ()=>{
    localStorage.setItem('usuarioLogado','')
    window.location.reload()
  }
const loginGoogle = ()=>{
  navigate('/loginGoogle')
  handleMenuClose()
}
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {!usuario
        ? 
          <div>
            <MenuItem onClick={irParaLogin}>Logar</MenuItem>
            <MenuItem onClick={loginGoogle}>Logar com google</MenuItem>
            
          </div>
        : 
          <div>
            <MenuItem onClick={deslogar}>Deslogar</MenuItem>
            <MenuItem >{usuario.userName}</MenuItem>
          </div>
      }
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      color='inrerit'
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={()=>navigate('/carrinhoCompras')}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={tamanhoDoCarrinho} color="error" >
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Carrinho</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
            <Avatar 
                 sx={{width:'38px',height:'38px'}} src={usuario && usuario.avatar}
                 alt={usuario && usuario.userName}
                
              />
        </IconButton>
        <p>{usuario && usuario.userName}</p>
      </MenuItem>
    </Menu>
  );

  const [texto,setTexto]=React.useState()
  const dispath = useDispatch()
  
  const search =     
    dispath({
      type:"search",
      payload:{search:texto}
    })
  const navigate = useNavigate()

 
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static" > */}
        <Toolbar>
    
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Procurar ..."
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={e=>{
              setTexto(e.target.value)}
              //navigate('/')
            }
            value={texto}
          />
 
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton onClick={search} type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
  
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
                 href='https://github.com/fabio460'
                 sx={{marginLeft:"5px"}} size="large" aria-label="show 4 new mails" color="default">
                <GitHubIcon />
            </IconButton>
            <IconButton 
                href='https://www.linkedin.com/in/fabio-oliveira-b2589163/'
                sx={{margin:""}} size="large" aria-label="show 4 new mails" color="default"  
             >
               <LinkedIn/>
            </IconButton>
            
            <IconButton
              sx={{margin:""}}
              size="large"
              aria-label="show 17 new notifications"
              color="default"
            >
              <Badge badgeContent={parseInt(tamanhoDoCarrinho)} color="error" 
                 onClick={()=>navigate('/carrinhoCompras')}>
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="default"
              sx={{marginLeft:"5px"}}
            >
              <Avatar 
                 sx={{width:'38px',height:'38px'}} src={usuario ? usuario.avatar : ""}
              />
              
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="default"
            >
              <MoreIcon />
            </IconButton>
            
          </Box>
          
        </Toolbar>
      {/* </AppBar> */}
      {/* <div style={{color:'black'}}>
        <img src={usuario.avatar}/>
      </div> */}
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
