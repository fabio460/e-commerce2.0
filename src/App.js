
import './App.css';
import Home from './Componentes/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Masculino from './Componentes/Rotas/Masculino';
import Feminino from './Componentes/Rotas/Feminino';
import Infantil from './Componentes/Rotas/Infantil';
import PlusSise from './Componentes/Rotas/PlusSise';
import InfantilFeminino from './Componentes/Rotas/InfantilFeminino';
import InfantilMasculino from './Componentes/Rotas/InfantilMasculino';
import PlusSiseFeminino from './Componentes/Rotas/PlusSiseFeminino';
import Sapatos from './Componentes/Rotas/Sapatos';
import Tenis from './Componentes/Rotas/Tenis';
import MasculinoAdulto from './Componentes/Rotas/MasculinoAdulto';
import FemininoAdulto from './Componentes/Rotas/FemininoAdulto';
import TelaDeCompra from './Componentes/Rotas/TelaDeCompras/TelaDeCompra';
import TelaCarrinhoDeCompras from './Componentes/Rotas/TelaCarrinhoDeCompras.js/TelaCarrinhoDeCompras';
import Login from './Componentes/Login/Login';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='login' element={<Login/>}/>
          <Route path="masculino" element={<Masculino />} />
          <Route path="masculinoAdulto" element={<MasculinoAdulto />} />
          <Route path="feminino" element={<Feminino />} />
          <Route path="femininoAdulto" element={<FemininoAdulto />} />
          <Route path="plusSise" element={<PlusSise/>} />
          <Route path="infantil" element={<Infantil />} />
          <Route path="telaDeCompras" element={<TelaDeCompra />} />
          <Route path="InfantilFeminino" element={<InfantilFeminino />} />
          <Route path="InfantilMasculino" element={<InfantilMasculino />} />
          <Route path="PlusSiseFeminino" element={<PlusSiseFeminino/>} />
          <Route path="sapato" element={<Sapatos />} />
          <Route path="tenis" element={<Tenis />} />
          <Route path="carrinhoCompras" element={<TelaCarrinhoDeCompras />} />
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
