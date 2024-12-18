import "./Gallery.css";
import "./../../../../components/quantity_input/Quantity_input.css"
import "./../../../../components/buttons/Small_button.css"
import gallery_image from "../../../../assets/images/system_images/company_images/happy_stomach/happy_stomach.png";
import Company_nav from "../../../../components/company_nav/Company_nav.tsx";
import {Link} from "react-router-dom";

const galleryData = [
    {
        id: 1,
        title: "Titulo da primeira imagem",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium...",
        image: gallery_image
    },
    {
        id: 2,
        title: "Titulo da segunda imagem",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium...",
        image: gallery_image
    },
    {
        id: 3,
        title: "Titulo da terceira imagem",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium...",
        image: gallery_image
    },
    {
        id: 4,
        title: "Titulo da quarta imagem",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium...",
        image: gallery_image
    }
];

function Gallery() {
    return (
        <>
            <main className={"main_of_page"}>
                <Company_nav/>
                <div className={"content_width"}>
                    <article className={"client_page_gallery_article"}>
                        <h1 className={"client_page_main_title"}>Galeria</h1>

                        {galleryData.map((item) => (
                            <div className={"client_page_gallery_card"} key={item.id}>
                                <img className={"gallery_image"} src={item.image} alt={item.title}/>
                                <div className={"client_page_gallery_content"}>
                                    <h2 className={"client_page_caption"}>{item.title}</h2>

                                    <div className={"client_page_buying_functionalities"}>
                                        <div className={"quantity_input_container"}>
                                            <button className={"quantity_input_button"} id={"minus"}><i
                                                className={"fa fa-minus"}/></button>
                                            <input className={"quantity_input"} type={"number"} defaultValue={"1"}
                                                   min={"1"}/>
                                            <button className={"quantity_input_button"} id={"plus"}><i
                                                className={"fa fa-add"}/></button>
                                        </div>
                                        <button className={"small_button"} title={"Adicionar ao carrinho"}><i
                                            className={"fa fa-shopping-cart"}></i></button>
                                        <Link to={"/carrinho"}>
                                            <button className={"small_button"} title={"Fazer pedido"}><i
                                                className={"fa fa-shopping-basket"}></i></button>
                                        </Link>
                                    </div>

                                    <p className={"client_page_paragraph"}>{item.description}</p>
                                </div>
                            </div>
                        ))}

                    </article>
                </div>
            </main>
        </>
    );
}

export default Gallery;
