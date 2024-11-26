import './Home.css'

import Banner from './../../components/banner/Banner.tsx'
import Company_card from "../../components/card/components/company_card/Company_card.tsx";


function Home() {

    return (
        <>
            <main className={"main_of_page"}>
                <div className={"content_width"}>
                    <Banner/>
                    <h2 className={"caption"}>Lista de negocios</h2>
                    <section className={"standard_section"}>
                        <Company_card/>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Home
