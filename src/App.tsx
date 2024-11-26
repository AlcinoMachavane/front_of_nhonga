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

const routes = [
    { path: '/', element: <Home /> },
    { path: '/acerca', element: <About /> },
    { path: '/login', element: <Login /> },
    { path: '/cadastro', element: <Register /> },
    { path: '/politicas', element: <Policies /> },
    { path: '*', element: <Not_found /> },
];

function App() {
    return (
        <Router>
            <Nav />
            <main>
                <Routes>
                    {routes.map(route => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
