import Link from "next/link";
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className={styles.nav}>
                <Link href="/" className={styles.link}>Inicio</Link>
                <Link href="/about" className={styles.link}>Sobre mí</Link>
                <Link href="/contact" className={styles.link}>Contacto</Link>
            </nav>
        </header>
    );
}