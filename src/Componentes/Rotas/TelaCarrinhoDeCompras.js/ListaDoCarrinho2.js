import * as React from 'react';
import './carrinho.css'
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useDispatch, useSelector } from 'react-redux';
import CarregandoLista from './CarregandoLista';
import { Button, Fab, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';





export default function ListaDoCarrinho2({item}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const atualiza = useSelector(state=>state.AtualizarApi.atualiza)
  const dispath = useDispatch()
  const [listCarrinho,setListCarrinho]=React.useState([])
  const [atualizar,setAtualizar]=React.useState(false)









//////////////////////


function createData(name, calories, nome, valor, quantidade, tamanho) {
  return {
    name,
    calories,
    nome,
    valor,
    quantidade,
    tamanho
  };
}

var rows = [
  createData("",
    <CarregandoLista/>,
    <CarregandoLista/>,
    <CarregandoLista/>,
    <CarregandoLista/>,
    <CarregandoLista/>,
    <CarregandoLista/>
  ),
];




  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: '',
    },
    {
      id: 'calories',
      numeric: true,
      disablePadding: false,
      label: 'Produto',
    },
    {
      id: 'nome',
      numeric: true,
      disablePadding: false,
      label: 'Nome',
    },
    {
      id: 'valor',
      numeric: true,
      disablePadding: false,
      label: 'Preço',
    },
    {
      id: 'quantidade',
      numeric: true,
      disablePadding: false,
      label: 'Quantidade',
    },
    {
        id: 'tamanho',
        numeric: true,
        disablePadding: false,
        label: 'Tamanho',
    },
  
  ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



const headCells2 = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'nome',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'valor',
    numeric: true,
    disablePadding: false,
    label: 'Valor(g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

//////////////////////







  const diminuirQuantidade = async(e)=>{
    try {
      
      listCarrinho.filter(elem=>{
        if (elem.imagem1 === e && parseInt(elem.quantidade) > 1) {
          
          const formdata = new FormData()
          formdata.append('quantidade',parseInt(elem.quantidade)-1)
          fetch('https://api-e-commerce.vercel.app/atualisacarrinho/'+elem._id,{
            method:"PUT",
            body:formdata
          })
         // window.location.reload()
         setTimeout(() => {
          setAtualizar(!atualizar) 
         }, 200);
         
        }
      })
     } catch (error) {
        console.log(error)
     }
  }
  const  aumentarQuantidade = async(e)=>{
     try {
      
      listCarrinho.filter(elem=>{
        if (elem.imagem1 === e) {
          const formdata = new FormData()
          formdata.append('quantidade',parseInt(elem.quantidade)+1)
          fetch('https://api-e-commerce.vercel.app/atualisacarrinho/'+elem._id,{
            method:"PUT",
            body:formdata
          })
          setTimeout(() => {
            setAtualizar(!atualizar) 
           }, 200);
        }
      })
     } catch (error) {
        console.log(error)
     }
    
  }
  
  async function getCarrinho() {
     
      rows = []
      listCarrinho.map(item=>{
          rows.push(
              createData(
                <div key={item._id} style={{display:"none"}}>{item._id}</div>,
                <img src={item.imagem1} className='imagemDaListaCarrinho' />,
                item.nome,
                item.valor,
                <div style={{display:'flex',alignItems:'center'}}>
                  <div style={{padding:'1px',height:'40px',width:"40px",display:'flex', alignItems:'center',justifyContent:"center"}}>
                     <IconButton onClick={()=> diminuirQuantidade(item.imagem1)} sx={{height:'40px',width:"40px"}}>
                       <span style={{marginBottom:'5px',fontSize:'30px'}}> - </span>
                     </IconButton>
                  </div>
                  {item.quantidade}
                  <div style={{padding:'1px',height:'40px',width:"40px",display:'flex', alignItems:'center',justifyContent:"center"}}>
                     <IconButton onClick={()=> aumentarQuantidade(item.imagem1)} sx={{height:'40px',width:"40px"}}> 
                     <span style={{marginBottom:'5px',fontSize:'30px'}}> + </span> 
                     </IconButton>
                  </div>
                </div>,
                item.tamanho,
                ),
          )
      })    
    } 
    
  getCarrinho()
  const deletarItens = (selected)=>{

    selected.map(e=>{
      //console.log(e.key)
      try {
        const formdata = new FormData()
        formdata.append("id",e.key)
       
        fetch('https://api-e-commerce.vercel.app/deletarCarrinho/'+e.key,{
          method:"DELETE",
          body:formdata
        })
        window.location.reload()
        // dispath({
        //   type:'atualiza',
        //   payload:{
        //     atualiza:!atualiza,
        //   }
        // })
      } catch (error) {
        console.log(error)
      }
    })
  }


  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
    
    async function getList() {
      const l =await fetch('https://api-e-commerce.vercel.app/listarCarrinho').then(r=>r.json())
      setListCarrinho(l)
    }
  
    React.useEffect(()=>{
      getList()
    },[atualizar])

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selecionado(s)
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%',display:'flex' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            <div>Meu carrinho</div>
            <Button onClick={()=>navigate('/')}>Home</Button>
          </Typography>
         
        )}
  
  
  
        {numSelected > 0 ? (
          <Tooltip title="Delete" onClick={()=> deletarItens(props.selected)}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };
  
  const navigate = useNavigate()

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%',height:"" }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} selected={selected}/>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row.name)}
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.nome}</TableCell>
                      <TableCell align="left">{row.valor}</TableCell>
                      <TableCell align="left">{row.quantidade}</TableCell>
                      <TableCell align="left">{row.tamanho}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
