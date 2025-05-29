import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
    return (
        <>
        <Header />
        <main className="about">
            <section className="perfil">
                <Image 
                    src="/images/logo.jpg"
                    alt="Logo de Elisabet"
                    width={150}
                    height={150}
                    className="logo-image"
                />
                <h2>Hola, soy Elisabet</h2>
                <p>
                    Soy estudiante de desarrollo web. Este es mi espacio personal donde comparto mis proyectos y aprendizajes.
                </p>
            </section>
        </main>
        <Footer />
        </>
    );
}