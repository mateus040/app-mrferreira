import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import Empresa1 from './pages/Empresa1';
import Administrative from './pages/private/Administrative';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Main />}></Route>
            <Route exact path='/empresa1' element={<Empresa1 />}></Route>
            <Route exact path='/administrativo' element={<Administrative />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
