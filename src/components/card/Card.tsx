import { Link } from "react-router-dom";
import "./Card.css";
import * as React from "react";

// Definição da interface para os dados
interface CardData {
    id: string;
    img: string;
    name: string;
    activity?: string;
    description: string;
    price?: number;
}

// Props para o componente Card
interface CardProps {
    data: CardData;
    type: "company" | "product";
}

const Card: React.FC<CardProps> = ({ data, type }) => {
    const { id, img, name, activity, description, price } = data;

    return (
        <Link className="to_the_card" to={`/${type}/${id}/${name}/gallery`} key={id}>
            <article className="card">
                <img className="card_image" alt={`Imagem de ${name}`} src={img} />
                <h3 className="card_name">{name}</h3>
                {type === "company" && <h4 className="card_caption">{activity}</h4>}
                <p className="card_description">{description}</p>
                {type === "product" && <p className="card_price">Preço: {price} MZN</p>}
            </article>
        </Link>
    );
};

export default Card;
