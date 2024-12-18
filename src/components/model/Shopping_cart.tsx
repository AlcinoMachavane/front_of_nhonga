
import "./Shopping_cart.css"
import "./../../components/buttons/Standard_button.css"
import {Link} from "react-router-dom";
import gallery_image from "../../assets/images/system_images/company_images/happy_stomach/happy_stomach.png";

function Shopping_cart() {

    const galleryData = [
        {
            id: 1,
            title: "Titulo da primeira imagem",
            image: gallery_image
        },
        {
            id: 2,
            title: "Titulo da segunda imagem",
            image: gallery_image
        },
        {
            id: 3,
            title: "Titulo da terceira imagem",
            image: gallery_image
        },
        {
            id: 4,
            title: "Titulo da quarta imagem",
            image: gallery_image
        }
    ];


    return (
        <>
            <main className={"main_of_page"}>
                <section className={"standard_section centralize"}>
                    <div className={"content_width"}>
                        <article className={"shopping_list_article"}>
                            <h1 className={"shopping_list_main_title"}>Carrinho</h1>

                            {galleryData.map((item) => (
                                <div className={"shopping_item"} key={item.id}>
                                    <img className={"shopping_item_image"} src={item.image} alt={item.title}/>
                                    <div className={"shopping_item_content"}>
                                        <h2 className={"shopping_item_caption"}>{item.title}</h2>

                                        <div className={"shopping_item_buying_functionalities"}>
                                            <div className={"quantity_input_container"}>
                                                <button className={"quantity_input_button"} id={"minus"}><i
                                                    className={"fa fa-minus"}/></button>
                                                <input className={"quantity_input"} type={"number"} defaultValue={"1"}
                                                       min={"1"}/>
                                                <button className={"quantity_input_button"} id={"plus"}><i
                                                    className={"fa fa-add"}/></button>
                                            </div>
                                            <button className={"small_button"} title={"Adicionar ao carrinho"}><i
                                                className={"fa fa-close"}></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className={"button_container"}>
                                <button className={"standard_button accept"}>Adicionar</button>
                                <button className={"standard_button accept"}><Link to={"/company/1/Nhonga/localizacao"}>Submeter</Link></button>
                            </div>

                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Shopping_cart
