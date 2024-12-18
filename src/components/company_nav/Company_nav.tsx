import { NavLink } from 'react-router-dom';
import '../../assets/fonts/fontawesome-free-6.6.0-web/css/all.min.css';
import './Company_nav.css'
import logotipo from '../../assets/images/system_images/company_images/happy_stomach/happy_stomach.png';
import { useState } from 'react';

const nav_items = [
    { id: 1, page_name: "gallery", rout: "/company/1/Nhonga/gallery" },
    { id: 2, page_name: "about", rout: "/company/1/Nhonga/acerca" },
    { id: 3, page_name: "contacts", rout: "/company/1/Nhonga/contactos" },
    { id: 4, page_name: "location", rout: "/company/1/Nhonga/localizacao" },
    //... adicionar outros itens se necessário.
];

function Company_nav() {
    const [menuVisible, setMenuVisible] = useState(false);

    // Alterna a visibilidade do menu
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav className="company_navbar">
            <div className="company_navbar_content_container">
                {/* Link para a página inicial */}
                <NavLink className="company_main_logo_link" to="/company/1/Nhonga/gallery" aria-label="Ir para a página inicial">
                    <img className="company_main_logo" src={logotipo} alt="Logotipo da Client_page" />
                </NavLink>

                {/* Botão de exibição do menu */}
                <button
                    className="company_show_nav_list_button"
                    id="company_show_nav_list_button"
                    aria-label="Abrir menu de navegação"
                    onClick={toggleMenu}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>

                {/* Lista de navegação */}
                <ul className={`company_nav_list ${menuVisible ? "visible" : ""}`} id="nav_list">
                    {nav_items.map((item) => (
                        <li key={item.id} className="company_nav_item">
                            <NavLink className="company_nav_link" to={item.rout}>
                                {item.page_name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Company_nav;
