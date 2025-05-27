import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-black-100 p-4 shadow-md">
            <nav className="flex gap-4 justify-center">
                <Link href="/">Inicio</Link>
                <Link href="/about">Sobre mí</Link>
                <Link href="/contact">Contacto</Link>
            </nav>
        </header>
    );
}