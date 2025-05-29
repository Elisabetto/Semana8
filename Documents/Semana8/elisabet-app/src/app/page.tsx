import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Header /> 
            <main className="home">
                <section className="laptop">
                    <h1>Bienvenido a mi sitio</h1>
                    <p>Un lugar donde comparto mis proyectos.</p>
                    <Image 
                        src="/images/laptop.jpg"
                        alt="Imagen principal"
                        width={600}
                        height={400}
                        className="laptop-image"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}