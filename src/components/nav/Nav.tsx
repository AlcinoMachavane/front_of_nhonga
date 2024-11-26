import { NavLink } from 'react-router-dom';
import './Nav.css';
import '../../assets/fonts/fontawesome-free-6.6.0-web/css/all.min.css';
import logotipo from '../../assets/images/system_images/icon/nhonga_logo_filled_bold.svg';
import { useState } from 'react';

const nav_items = [
    { id: 1, page_name: "Home", rout: "/" },
    { id: 2, page_name: "Acerca", rout: "/acerca" },
    { id: 3, page_name: "Cadastro", rout: "/cadastro" },
    { id: 4, page_name: "Logar", rout: "/login" },
    { id: 5, page_name: "Políticas", rout: "/politicas" }
    //... adicionar outros itens se necessário.
];

function Nav() {
    const [menuVisible, setMenuVisible] = useState(false);

    // Alterna a visibilidade do menu
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav className="navbar">
            <div className="navbar_content_container">
                {/* Link para a página inicial */}
                <NavLink to="/" aria-label="Ir para a página inicial">
                    <img className="main_logo" src={logotipo} alt="Logotipo da Nhonga" />
                </NavLink>

                {/* Botão de exibição do menu */}
                <button
                    className="show_nav_list_button"
                    id="show_nav_list_button"
                    aria-label="Abrir menu de navegação"
                    onClick={toggleMenu}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>

                {/* Lista de navegação */}
                <ul className={`nav_list ${menuVisible ? "visible" : ""}`} id="nav_list">
                    {nav_items.map((item) => (
                        <li key={item.id} className="nav_item">
                            <NavLink className="nav_link" to={item.rout}>
                                {item.page_name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
