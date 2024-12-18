import "../../Client_pages_styles.css";
import "./Contacts.css"
import Company_nav from "../../../../components/company_nav/Company_nav.tsx";
import {Link} from "react-router-dom";


function Contacts() {
    return (
        <>
            <main className={"main_of_page"}>
                <Company_nav/>
                <section className={"standard_section centralize"}>
                    <article className={"track_article"}>

                        <div className={"contacts_container"}>

                            <h1 className={"contacts_caption"}>Contacts</h1>

                            <ul className={"company_contact_list"}>
                                <li className={"company_contact_list_item"}><Link to={"import bernardo_image from '.."}
                                                                                  title={"Facebook"}><i
                                    className="fa-brands fa-facebook"></i></Link></li>
                                <li className={"company_contact_list_item"}><Link to={"import bernardo_image from '.."}
                                                                                  title={"Whatsapp"}><i
                                    className="fa-brands fa-whatsapp"></i></Link></li>
                                <li className={"company_contact_list_item"}><Link to={"import bernardo_image from '.."}
                                                                                  title={"Instagram"}><i
                                    className="fa-brands fa-instagram"></i></Link></li>
                                <li className={"company_contact_list_item"}><Link to={"import bernardo_image from '.."}
                                                                                  title={"Telegram"}><i
                                    className="fa-brands fa-telegram"></i></Link></li>
                                <li className={"company_contact_list_item"}><Link to={"import bernardo_image from '.."}
                                                                                  title={"Email"}><i
                                    className="fa-solid fa-envelope"></i></Link></li>
                            </ul>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Contacts;
