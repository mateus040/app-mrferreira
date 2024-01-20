import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './pages/Main';
import PageProvider from './pages/private/pages/Provider';
import HomePrivate from './pages/private/pages/HomePrivate';
import Products from './pages/private/pages/Products';
import EditProvider from './pages/private/pages/Provider/edit';
import EditProduct from './pages/private/pages/Products/edit';
import { AuthProvider, useAuth } from './pages/private/context/AuthContext';
import CompanysProducts from './pages/CompanysProducts';

const PrivateRoute = ({ element, ...rest }) => {
  const { token } = useAuth();

  return token ? element : <Navigate to="/" />;
};

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Main />}></Route>
            <Route path='/empresa/:companyId' element={<CompanysProducts />} />

            <Route exact path='/home/admin' element={<PrivateRoute element={<HomePrivate />} />} />
            <Route exact path='/produtos' element={<PrivateRoute element={<Products />} />} />
            <Route exact path='/produtos/update/:productId' element={<PrivateRoute element={<EditProduct />} />} />
            <Route exact path='/fornecedores' element={<PrivateRoute element={<PageProvider />} />} />
            <Route exact path='/fornecedores/update/:companyId' element={<PrivateRoute element={<EditProvider />} />} />
          </Routes>
        </Router>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;