import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';

export default function ModalFinalizarCompra({rua,uf,cidade,complemento,total,setPreenchido,preenchido,setError}) {
  const [open, setOpen] = React.useState(false);
  const carrinho = useSelector(state=>state.listaCarrinhoDeComprasReducer.lista)
  const handleClickOpen = () => {
    if(preenchido){
      setPreenchido(false)
      setError(true)
      setOpen(true);
    }else{
      setPreenchido(true)
      setError(false)
    }
 
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='outlined'  size='small' color='success' fullWidth onClick={handleClickOpen}>Finalizar pedido</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             Emitida uma ordem de compra no endereço: 
                {rua} - {cidade}/{uf}, {complemento}, 
                no valor de R$ {total}.<br/>
             Produtos:    
             {carrinho.map((item,key)=>{
                return <div>{key} - {item.nome}</div>
             })}   
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirmar</Button>
          <Button onClick={handleClose} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
