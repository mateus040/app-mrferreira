import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './pages/Main';
import Empresa1 from './pages/Empresa1';
import PageProvider from './pages/private/pages/Provider';
import HomePrivate from './pages/private/pages/HomePrivate';
import Products from './pages/private/pages/Products';
import EditProvider from './pages/private/pages/Provider/edit';
import EditProduct from './pages/private/pages/Products/edit';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Main />}></Route>
            <Route exact path='/empresa1' element={<Empresa1 />}></Route>
            <Route exact path='/home/admin' element={<HomePrivate />}></Route>
            <Route exact path='/produtos' element={<Products />}></Route>
            <Route exact path='/produtos/update/:productId' element={<EditProduct />}></Route>
            <Route exact path='/fornecedores' element={<PageProvider />}></Route>
            <Route exact path='/fornecedores/update/:companyId' element={<EditProvider />}></Route>
          </Routes>
        </Router>
        <ToastContainer />
    </div>
  );
}

export default App;
