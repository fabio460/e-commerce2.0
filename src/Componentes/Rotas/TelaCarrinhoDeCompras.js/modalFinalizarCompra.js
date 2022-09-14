import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import BtnMensagemDeErro from './BtnMensagemDeErro';
import { useNavigate } from 'react-router-dom';

export default function ModalFinalizarCompra({rua,uf,cidade,complemento,total,setPreenchido,preenchido,setError,numero,setNumero}) {
  const [open, setOpen] = React.useState(false);
  const carrinho = useSelector(state=>state.listaCarrinhoDeComprasReducer.lista)
  const [habilitar,setHabilitar]=React.useState(true)
  const navigate = useNavigate()
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

  let usuarioLogado = localStorage.getItem('usuarioLogado');
  let usuarioLogadoObj ={}
       
  if(usuarioLogado.userName){
     usuarioLogadoObj = JSON.parse(usuarioLogado)

  }

  return (
    <div>
      <BtnMensagemDeErro habilitar={habilitar} preenchido={preenchido} handleClickOpen={handleClickOpen} />
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
           {
            usuarioLogado 
              ?
              <DialogContentText id="alert-dialog-description">
                <div> 
                  Emitida uma ordem de compra para o senhor(a) {JSON.parse(usuarioLogado).userName+" "} 
                    no valor de R${total} reais, no endereço: 
                     <span>{rua}, {numero? "numero "+numero : "S/N"} - {cidade}/{uf}, {complemento && complemento+". "}</span>
                </div>
                Produtos :
                {carrinho.map((item,key)=>{
                  return <div>{key + 1} - {item.nome}</div>
                })}   
              </DialogContentText>
                :
                <DialogContentText id="alert-dialog-description">
                    Usuario precisa estar logado
                </DialogContentText>
              }
        </DialogContent>
        <DialogActions>
          {
            usuarioLogado
               ?
               <Button onClick={handleClose}>Confirmar</Button>
               :
               <Button onClick={()=> navigate('/login')}>Login</Button>
          }
          <Button onClick={handleClose} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
