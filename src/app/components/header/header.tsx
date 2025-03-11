import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <>
            {/* Cabeçalho da página */}
            <header className="w-full bg-white py-6">
                <div className="w-4xl max-w-11/12 mx-auto flex justify-between items-center">
                    <Link href="/" aria-label="Ir para a página inicial">
                        <Image src="/images/logo-ccr.png" alt="Logo da CCR" width={80} height={80} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 max-w-full max-h-full"></Image>
                    </Link>

                    {/* Menu de navegação */}
                    <nav className="ml-8">
                        <ul className="flex list-none p-0">
                            <li>
                                <Link className="text-black px-4 py-1 hover:underline" href="/">
                                    Início
                                </Link>
                            </li>

                            <li>
                                <Link className="text-black px-4 py-1 hover:underline" href="/ccr-alertas">
                                    CCR Alertas
                                </Link>
                            </li>

                            <li>
                                <Link className="text-black px-4 py-1 hover:underline" href="/integrantes">
                                    Integrantes
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}