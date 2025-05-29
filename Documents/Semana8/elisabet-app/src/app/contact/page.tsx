import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Contact.module.css"

export default function Contact() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1 className={styles.title}>Contacto</h1>

                <form className={styles.form}>
                    <label>
                        Nombre:
                        <input type="text" name="name"/>
                    </label>
                    <label>
                        Correo electrónico:
                        <input type="email" name="email"/>
                    </label>
                    <label>
                        Mensaje:
                        <textarea name="message" id="message" rows={5}></textarea>
                    </label>

                    <button type="submit">Enviar</button>
                </form>
            </main>
            <Footer />
        </>
    );
}