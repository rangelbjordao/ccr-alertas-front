"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";

export function Header() {
    const [logado, setLogado] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("authToken");
            setLogado(!!token);
            setLoading(false);
        };

        checkAuth();
        window.addEventListener("storage", checkAuth);

        return () => {
            window.removeEventListener("storage", checkAuth);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setLogado(false);
        router.push("/login");
    };

    const handleLogin = () => {
        router.push("/login");
    };

    const handleProtectedRoute = (e: React.MouseEvent) => {
        if (!logado) {
            e.preventDefault();
            router.push("/login");
        }
    };

    return (
        <>
            {/* Botão de Login e Logout */}
            {!loading && (
                <div className="fixed top-2 right-2 flex flex-col items-end">
                    <button
                        onClick={logado ? handleLogout : handleLogin}
                        className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-300 transition hover:cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl"
                    >
                        <BiUser className="text-lg" />
                        {logado ? "Logout" : "Login"}
                    </button>
                </div>
            )}

            <header className="w-full bg-white py-6 text-sm sm:text-base md:text-lg lg:text-xl">
                <div className="w-4xl max-w-11/12 mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" aria-label="Ir para a página inicial">
                        <Image
                            src="/images/logo-ccr.png"
                            alt="Logo da CCR"
                            width={80}
                            height={80}
                            className="w-14 h-14 md:w-16 md:h-16 lg:h-20 lg:w-20"
                        />
                    </Link>

                    {/* Menu de navegação */}
                    <nav>
                        <ul className="flex list-none p-0">
                            <li>
                                <Link className="px-2 hover:underline" href="/">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link className="text-black px-2 hover:underline" href="/ccr-alertas" onClick={handleProtectedRoute}>
                                    CCR Alertas
                                </Link>
                            </li>
                            <li>
                                <Link className="text-black px-2 hover:underline" href="/integrantes">
                                    Integrantes
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
