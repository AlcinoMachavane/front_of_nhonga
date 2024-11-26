import './Footer.css'
import {Link} from "react-router-dom";
import '../../assets/fonts/fontawesome-free-6.6.0-web/css/all.min.css'
function Footer() {

    return (
        <>
            <footer className={"footer"}>
                <div className={"footer-container"}>
                    <ul className={"contact_list"}>
                        <li className={"contact_list_item"}><Link to={"import bernardo_image from '.."} title={"Facebook"}><i
                            className="fa-brands fa-facebook"></i></Link></li>
                        <li className={"contact_list_item"}><Link to={"import bernardo_image from '.."} title={"Whatsapp"}><i
                            className="fa-brands fa-whatsapp"></i></Link></li>
                        <li className={"contact_list_item"}><Link to={"import bernardo_image from '.."} title={"Instagram"}><i
                            className="fa-brands fa-instagram"></i></Link></li>
                        <li className={"contact_list_item"}><Link to={"import bernardo_image from '.."} title={"Telegram"}><i
                            className="fa-brands fa-telegram"></i></Link></li>
                        <li className={"contact_list_item"}><Link to={"import bernardo_image from '.."} title={"Email"}><i
                            className="fa-solid fa-envelope"></i></Link></li>
                    </ul>
                    <p className={"copyright"}><Link to={"http//monaliza.com"}>&copy; 2024 Monaliza</Link></p>
                </div>
            </footer>
        </>
    )
}

export default Footer
