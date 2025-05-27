import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/about">Sobre mí</Link>
                <Link href="/contact">Contacto</Link>
            </nav>
        </header>
    );
}