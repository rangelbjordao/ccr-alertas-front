"use client";

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import Botao from "../botao/botao";

const CompCcrAlertas = () => {
    const router = useRouter();
    const [cargo, setCargo] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const storedCargo = localStorage.getItem("userCargo");

        if (!token || !storedCargo) {
            router.push("/login");
            return;
        }

        setCargo(storedCargo);
    }, [router]);


    return (
        <>
            <main>
                <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">CCR Alertas</h1>

                {/* Botões */}
                <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <Link href="/ccr-alertas/reportar-eventos">
                        <Botao texto="Reportar Evento" />
                    </Link>

                    <Link href={`/ccr-alertas/monitorar-eventos/${cargo}`}>
                        <Botao texto="Monitorar Eventos em Aberto" />
                    </Link>

                    <Link href="/ccr-alertas/solicitar-ajuda">
                        <Botao texto="Solicitar Ajuda" />
                    </Link>

                    <Link href={`/ccr-alertas/historico/${cargo}`}>
                        <Botao texto="Histórico" />
                    </Link>
                </section>
            </main>
        </>
    )
}

export default CompCcrAlertas