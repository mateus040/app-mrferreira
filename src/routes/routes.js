import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/Main';
import PageProvider from '../pages/private/pages/Provider';
import HomePrivate from '../pages/private/pages/HomePrivate';
import Products from '../pages/private/pages/Products';
import EditProvider from '../pages/private/pages/Provider/edit';
import EditProduct from '../pages/private/pages/Products/edit';
import CompanysProducts from '../pages/CompanysProducts';
import { AuthProvider, useAuth } from '../pages/private/context/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { token } = useAuth();

    return token ? element : <Navigate to="/" />;
}

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/empresa/:companyId' element={<CompanysProducts />} />

                    <Route path='/home/admin' element={<PrivateRoute element={<HomePrivate />} />} />
                    <Route path='/produtos' element={<PrivateRoute element={<Products />} />} />
                    <Route path='/produtos/update/:productId' element={<PrivateRoute element={<EditProduct />} />} />
                    <Route path='/fornecedores' element={<PrivateRoute element={<PageProvider />} />} />
                    <Route path='/fornecedores/update/:companyId' element={<PrivateRoute element={<EditProvider />} />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}