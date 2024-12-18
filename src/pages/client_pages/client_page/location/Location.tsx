import "./Location.css";
import Company_nav from "../../../../components/company_nav/Company_nav.tsx";
import { useEffect, useRef } from "react";
import L from "leaflet";

function Location() {
    // Tipando corretamente o useRef para um elemento HTMLDivElement ou null
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (mapRef.current) {
            // Inicializa o mapa
            const map = L.map(mapRef.current).setView([-25.9667, 32.5833], 12);

            // Adiciona camadas ao mapa
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '© OpenStreetMap contributors',
            }).addTo(map);

            // Adiciona um marcador inicial
            const marker = L.marker([-25.9667, 32.5833]).addTo(map);

            // Simulação de movimentação do marcador
            let lat = -25.9667;
            let lng = 32.5833;
            const interval = setInterval(() => {
                lat += 0.001;
                lng += 0.001;
                marker.setLatLng([lat, lng]);
            }, 2000); // Atualiza a posição a cada 2 segundos

            // Cleanup
            return () => {
                clearInterval(interval);
                map.remove();
            };
        }
    }, []);

    return (
        <>
            <main className={"main_of_page"}>
                <Company_nav />
                <section className={"standard_section centralize"}>
                    <article className={"track_article"}>
                        <div
                            className={"map_container"}
                            ref={mapRef} // Referência do mapa
                            style={{
                                width: "100%",
                                height: "500px",
                            }}
                        ></div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Location;
