import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Jogos from './components/pages/Jogos';
import Atualizar from './components/pages/atualizar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Principal from './components/pages/Principal';
import Categorias from './components/pages/categorias'
import Cadastrar from './components/pages/cadastrar'
import Styles from './App.css'

function App() {
  return (
    <Router >
      <Navbar/>
      <Routes>
    <Route  path='/' element={<Principal />}></Route>
    <Route  path='/jogos' element={<Jogos />} />
    <Route  path='/editar' element={<Atualizar />} />
    <Route  path='/categorias' element={<Categorias />} />
    <Route  path='/cadastro' element={<Cadastrar />} />
    </Routes>
    <Footer/>
    </Router>
    
  )
}

export default App;
