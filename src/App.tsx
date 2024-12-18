import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './g_styles/global.css'

import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Policies from './pages/policies/Policies';
import Not_found from './pages/error/not_found/Not_found';
import Nav from "./components/nav/Nav.tsx";
import Footer from "./components/footer/Footer.tsx";

import Client_about from "./pages/client_pages/client_page/about/Client_about.tsx";
import Contacts from "./pages/client_pages/client_page/contacts/Contacts.tsx";
import Location from "./pages/client_pages/client_page/location/Location.tsx";
import Gallery from "./pages/client_pages/client_page/gallery/Gallery.tsx";
import Shopping_cart from "./components/model/Shopping_cart.tsx";

const routes = [
    // Rotas gerais
    {path: '/', element: <Home/>},
    {path: '/acerca', element: <About/>},
    {path: '/login', element: <Login/>},
    {path: '/cadastro', element: <Register/>},
    {path: '/politicas', element: <Policies/>},

    // Rota de cards para empresas
    {path: '/company/1/Nhonga/gallery', element: <Gallery/>},
    // Rotas das paginas das empresas
    {path: '/company/1/Nhonga/acerca', element: <Client_about/>},
    {path: '/company/1/Nhonga/contactos', element: <Contacts/>},
    {path: '/company/1/Nhonga/localizacao', element: <Location/>},

    {path: '/carrinho', element: <Shopping_cart/>},
    {path: '*', element: <Not_found/>},

];

function App() {
    return (
        <Router>
            <Nav />
            <main>
                <Routes>
                    {routes.map(route => (
                        <Route key={route.path} path={route.path} element={route.element}/>
                    ))}
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
