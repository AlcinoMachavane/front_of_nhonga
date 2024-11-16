import './Nav.css'
import '../../assets/fontawesome-free-6.6.0-web/css/all.min.css'

// import logotipo from  '../../assets/image/system_images/icon/logotipo.svg'


function Nav() {

    return (
        <>
            <nav className={"navbar"}>
                <img className={"main_logo"} src={""} alt={"Logotipo da Nhonga"}/>
                <span className={"show_nav_list_button"}>
                    <i className={"fa-solid fa-bars"}></i>
                    <ul className={"nav_list"}>
                        <li className={"nav_item"}><a className={"nav_link"} href={""}>Home</a></li>
                        <li className={"nav_item"}><a className={"nav_link"} href={""}>Acerca</a></li>
                        <li className={"nav_item"}><a className={"nav_link"} href={""}>Cadastro</a></li>
                        <li className={"nav_item"}><a className={"nav_link"} href={""}>Logar</a></li>
                        <li className={"nav_item"}><a className={"nav_link"} href={""}>Politicas</a></li>
                    </ul>
                </span>
            </nav>
        </>
    )
}

export default Nav
