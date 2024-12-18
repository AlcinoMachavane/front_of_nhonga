// import "./../Client_pages_styles.css";
// import Banner from "../../../../components/banner/Banner.tsx"
import "./Client_about.css"
import logotipo from '../../../../assets/images/system_images/company_images/happy_stomach/happy_stomach.png';
import Company_nav from "../../../../components/company_nav/Company_nav.tsx";


function Client_about() {
    return (
        <>
            <main className={"main_of_page"}>
                <Company_nav/>
                <div className={"content_width"}>
                    <section className={"client_page_section"}>
                        <article className={"client_head_about_article"}>

                            <div className={"client_head_about_article_image_container"}>
                                <img className={"client_head_about_article_image"} src={logotipo}
                                     alt={"Imagem da empresa"}/>
                            </div>

                            <div className={"client_head_about_article_content"}>
                                <h1 className={"client_head_main_title"}>Nhonga</h1>
                                <h2 className={"client_head_main_caption"}><i>Fazendo o impossivel!</i></h2>
                                <p className={"client_head_paragraph"}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium
                                    architecto earum eligendi, exercitationem fugiat fugit magnam nostrum odit quae
                                    quasi qui quia quisquam reprehenderit rerum sequi soluta suscipit voluptate!
                                </p>
                            </div>

                        </article>
                    </section>
                    <section className={"client_page_section column_flexing"}>

                        <article className={"client_page_about_article"}>

                            <div className={"client_main_about_article_image_container"}>
                                <img className={"client_main_about_article_image"} src={logotipo}
                                     alt={"Imagem da empresa"}/>
                            </div>

                            <div className={"client_page_about_content_container"}>
                                <h2 className={"client_page_caption"}>Nhonga</h2>
                                <p className={"client_page_paragraph"}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium
                                    architecto earum eligendi, exercitationem fugiat fugit magnam nostrum odit quae
                                    quasi qui quia quisquam reprehenderit rerum sequi soluta suscipit voluptate!
                                </p>
                            </div>
                        </article>

                        <article className={"client_page_about_article"}>

                            <div className={"client_page_about_content_container"}>
                                <h2 className={"client_page_caption"}>Nhonga</h2>
                                <p className={"client_page_paragraph"}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium
                                    architecto earum eligendi, exercitationem fugiat fugit magnam nostrum odit quae
                                    quasi qui quia quisquam reprehenderit rerum sequi soluta suscipit voluptate!
                                </p>
                            </div>

                            <div className={"client_main_about_article_image_container"}>
                                <img className={"client_main_about_article_image"} src={logotipo}
                                     alt={"Imagem da empresa"}/>
                            </div>

                        </article>
                    </section>
                    <section className={"client_page_section"}>
                        <article className={"client_page_cta_article row_flexing"}>

                            <div className={"client_page_cta_content_container"}>
                                <h2 className={"client_page_caption"}>Nhonga</h2>
                                <p className={"client_page_paragraph"}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium
                                    architecto earum eligendi, exercitationem fugiat fugit magnam nostrum odit quae
                                    quasi qui quia quisquam reprehenderit rerum sequi soluta suscipit voluptate!
                                </p>
                            </div>

                            <div className={"button_container buttons_space"}>
                                {/*<button className={"standard_button deny"}>Cancelar</button>*/}
                                <button className={"standard_button accept"}>Contactar</button>
                            </div>

                        </article>

                    </section>

                    <section className={"client_page_section"}>
                        <article className={"client_page_awards_article row_flexing"}>

                            <div className={"client_page_awards_icon_container"}>
                                <i className={"fa fa-star"}></i>
                            </div>

                            <div className={"client_page_awards_content_container"}>
                                <h2 className={"client_page_caption"}>Nhonga</h2>
                                <p className={"client_page_paragraph"}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium
                                    architecto earum eligendi, exercitationem fugiat fugit magnam nostrum odit quae
                                    quasi qui quia quisquam reprehenderit rerum sequi soluta suscipit voluptate!
                                </p>
                            </div>
                        </article>
                    </section>
                </div>


                <article className={"client_page_testimony_article row_flexing"}>
                    <div className={"content_width_about"}>
                        <div className={"client_main_testimony_article_image_container"}>
                            <img className={"client_main_testimony_article_image"} src={logotipo}
                                 alt={"Imagem da empresa"}/>
                        </div>

                        <div className={"client_page_testimony_content_container"}>
                            <h2 className={"client_page_caption"}>Nhonga</h2>
                            <p className={"client_page_paragraph"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium
                                architecto earum eligendi, exercitationem fugiat fugit magnam nostrum odit quae
                                quasi qui quia quisquam reprehenderit rerum sequi soluta suscipit voluptate!
                            </p>
                        </div>
                    </div>

                </article>
            </main>
        </>
    );
}

export default Client_about;
