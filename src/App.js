import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Jogos from './components/pages/Jogos';
import Atualizar from './components/pages/atualizar';
import Header from './components/layout/Header';
import Home from './components/pages/home';
import Cadastrar from './components/pages/cadastrar'

function App() {
  return (
    <Router >
      <Header/>
      <Routes>
    <Route  path='/' element={<Home/>}></Route>
    <Route  path='/jogos' element={<Jogos/>} />
    <Route  path='/editar' element={<Atualizar/>} />
    <Route  path='/cadastrar' element={<Cadastrar/>} />
    </Routes>
    </Router>
    
  )
}

export default App;
