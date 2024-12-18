import Card from "./../../Card.tsx";
import company_data from "./company_data.tsx"; // Dados de empresas

const Company_card = () => {
    return (
        <>
            {company_data.map((company) => (
                <Card key={company.id} data={company} type="company" />
            ))}
        </>
    );
};

export default Company_card;
