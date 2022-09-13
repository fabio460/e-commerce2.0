import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';

export default function ModalFinalizarCompra({rua,uf,cidade,complemento,total,setPreenchido,preenchido,setError,numero,setNumero}) {
  const [open, setOpen] = React.useState(false);
  const carrinho = useSelector(state=>state.listaCarrinhoDeComprasReducer.lista)
  const [habilitar,setHabilitar]=React.useState(true)
  const handleClickOpen = () => {
    if(preenchido){
      setPreenchido(false)
      setError(false)
      setOpen(true);
      
    }else{
      setPreenchido(true)
      setError(true)
    }
    
  };

  const handleClose = () => {
    setNumero('')
    setOpen(false);

  };

  React.useEffect(()=>{
    if(total > 0){
      setHabilitar(false)
    }
  },[total])

  return (
    <div>
      <Button disabled={habilitar} variant='outlined'  size='small' color='success' fullWidth onClick={handleClickOpen}>
         Finalizar pedido
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Ordem de compra "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             Emitida uma ordem de compra no endereço: 
                {rua}, {numero? "numero "+numero : "S/N"} - {cidade}/{uf}, {complemento && complemento+". "}
                <br/> 
                Total a pagar R$ {total}.<br/>
             Produtos:    
             {carrinho.map((item,key)=>{
                return <div>{key + 1} - {item.nome}</div>
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
