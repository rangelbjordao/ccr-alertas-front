'use client'

import { buscarEventos, Evento } from "@/app/services/api";
import { useEffect, useState } from "react";

const CompHistorico = () => {
    const [eventos, setEventos] = useState<Evento[]>([])

    useEffect(() => {
        async function carregarEventos() {
            const dados = await buscarEventos()
            const resolvidos = dados.filter(evento => evento.status === "resolvido")
            setEventos(resolvidos)
        }

        carregarEventos()
    }, [])

    return (
        <>
            <main>
                <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">Histórico de Eventos</h1>

                {/* Seção Histórico */}
                <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <h2 className="text-2xl font-semibold mb-4">Eventos Resolvidos</h2>

                    {eventos.length === 0 ? (
                        <p className="text-white">Nenhum evento resolvido no momento.</p>
                    ) : (
                        eventos.map((evento) => (
                            <div key={evento.id} className="w-full max-w-3xl bg-white text-black p-4 rounded-md shadow-md mb-4">
                                <h3 className="text-xl font-bold text-red-700 mb-5">{evento.titulo}</h3>
                                <p className="m-2"><strong>Data:</strong> {evento.data}</p>
                                <p className="m-2"><strong>Cargo:</strong> {evento.cargo}</p>
                                <p className="m-2"><strong>Descrição:</strong> {evento.descricao}</p>
                                <p className="m-2"><strong>Status:</strong> {evento.status}</p>
                            </div>
                        ))
                    )}
                </section>
            </main>
        </>
    )
}

export default CompHistorico;
