import React, { useState, useEffect } from "react";
import "./Location.css";
import Company_nav from "../../../../components/company_nav/Company_nav.tsx";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function Location() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "YOUR_API_KEY",
    });

    const [position, setPosition] = useState({ lat: -25.9667, lng: 32.5833 });

    useEffect(() => {
        // Simulação de movimentação
        const interval = setInterval(() => {
            setPosition((prev) => ({
                lat: prev.lat + 0.001,
                lng: prev.lng + 0.001,
            }));
        }, 2000); // Atualiza a posição a cada 2 segundos

        return () => clearInterval(interval);
    }, []);

    if (!isLoaded) {
        return <div>Carregando mapa...</div>;
    }

    return (
        <>
            <main className={"main_of_page"}>
                <Company_nav />
                <section className={"standard_section centralize"}>
                    <article className={"track_article"}>
                        <div className={"map_container"}>
                            <GoogleMap
                                mapContainerStyle={{
                                    width: "100%",
                                    height: "500px",
                                }}
                                center={position}
                                zoom={12}
                            >
                                <Marker position={position} />
                            </GoogleMap>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Location;
