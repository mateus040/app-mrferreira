import './App.css';
import Main from './pages/Main';
import Empresa1 from './pages/Empresa1';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Main />}></Route>
            <Route exact path='/empresa1' element={<Empresa1 />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
