"use client";

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import Botao from "../botao/botao";

const CompCcrAlertas = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (!token || token.trim() === "") {
            router.push("/login");
        }
    }, []);

    return (
        <>

            <main>
                <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">CCR Alertas</h1>

                {/* Botões */}
                <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <Link href="/reportar-eventos">
                        <Botao texto="Reportar Evento" />
                    </Link>
                    <Link href="/monitorar-eventos">
                        <Botao texto="Monitorar Eventos em Aberto" />
                    </Link>
                    <Link href="/solicitar-ajuda">
                        <Botao texto="Solicitar Ajuda" />
                    </Link>
                    <Link href="/historico">
                        <Botao texto="Histórico" />
                    </Link>
                </section>
            </main>
        </>
    )
}

export default CompCcrAlertas