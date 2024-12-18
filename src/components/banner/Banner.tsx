import './Banner.css'
import {Link} from "react-router-dom";
import bernardo_image from '../../assets/images/system_images/company_images/bernardo/Livange.png';
import happy_stomach_image from '../../assets/images/system_images/company_images/happy_stomach/happy_stomach.png';
import nhonga from '../../assets/images/system_images/company_images/nhoga/entregas.jpg';
import MarkTool from '../../assets/images/system_images/company_images/marktool/design.png';
import Jojopa from '../../assets/images/system_images/company_images/jojopa/entregas.jpg';

const company = "company";

const publicity = [
    {id: 1, image: nhonga, type: company, name: "nhonga"},
    {id: 2, image: bernardo_image, type: company, name: "bernardo"},
    {id: 3, image: happy_stomach_image, type: company, name: "happy_stomach"},
    {id: 4, image: MarkTool, type: company, name: "MarkTool"},
    {id: 5, image: Jojopa, type: company, name: "Jojopa"}
];


function Banner() {

    return (
        <>
            <div className={"banner"}>
                <div className="centralise_posts">

                    {
                        publicity.map((publicity) => (
                            <Link className={"image_container"}
                                  to={`/${publicity.type}/${publicity.id}/${publicity.name}`} key={publicity.id}>
                                <img className={"banner_image"} alt={"imagem do banner"} src={publicity.image}/>
                            </Link>
                        ))
                    }
                </div>

            </div>

            </>
            )
            }

export default Banner
