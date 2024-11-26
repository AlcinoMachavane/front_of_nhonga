import './Banner.css'
import {Link} from "react-router-dom";
import bernardo_image from '../../assets/images/system_images/company_images/bernardo/Livange.png';
// import happy_stomach_image from '../../assets/images/system_images/company_images/happy_stomach/happy_stomach.png';
// import nhonga from '../../assets/images/system_images/company_images/nhoga/entregas.jpg';
// import MarkTool from '../../assets/images/system_images/company_images/marktool/design.png';
// import Jojopa from '../../assets/images/system_images/company_images/jojopa/entregas.jpg';


function Banner() {

    const publicity = [
        {id: 1, image: bernardo_image, banner_title: "Bernardo Livandje"},
        // {id: 2, image: happy_stomach_image, banner_title: "Segundo titulo"},
        // {id: 3, image: nhonga, banner_title: "terceiro titulo"},
        // {id: 4, image: MarkTool, banner_title: "quarto titulo"},
        // {id: 5, image: Jojopa, banner_title: "quinto titulo"},
    ];

    return (
        <>
            <div className={"banner"}>
                {
                    publicity.map((publicity) => (

                        <Link className={"image_container"} to={"#"} key={publicity.id}>
                            <h1 className={"banner_title"}>{publicity.banner_title}</h1>
                            <img className={"banner_image"} alt={"imagem do banner"} src={publicity.image}/>
                        </Link>
                    ))
                }
            </div>

        </>
    )
}

export default Banner
