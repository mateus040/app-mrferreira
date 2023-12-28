import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import Empresa1 from './pages/Empresa1';
import PageProvider from './pages/private/PageProvider';
import HomePrivate from './pages/private/HomePrivate';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Main />}></Route>
            <Route exact path='/empresa1' element={<Empresa1 />}></Route>
            <Route exact path='/fornecedores' element={<PageProvider />}></Route>
            <Route exact path='/home/admin' element={<HomePrivate />}></Route>

          </Routes>
        </Router>
    </div>
  );
}

export default App;
