'use client'

import { atualizarStatusEvento, buscarEventos, carregarEventos, Evento } from "@/app/services/api"
import { useEffect, useState } from "react"

const CompMonitorarEventos = () => {
    const [eventos, setEventos] = useState<Evento[]>([]);

    useEffect(() => {
        const mostrarEventos = async () => {
            try {
                const eventosNaoResolvidos = await carregarEventos(["Em andamento", "Sem resposta"]);
                setEventos(eventosNaoResolvidos);
            } catch (error) {
                console.error("Erro ao carregar eventos:", error);
            }
        };

        mostrarEventos();
    }, []);

    async function mudarStatus(id: number, novoStatus: "Sem resposta" | "Em andamento" | "Resolvido") {
        await atualizarStatusEvento(id, novoStatus);
        const atualizados = await buscarEventos();
        setEventos(atualizados.filter(ev => ev.status !== "Resolvido"));
    }

    return (
        <>
            <main>
                <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">Monitorar Eventos</h1>

                {/* Seção eventos abertos */}
                <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <h2 className="text-2xl font-semibold mb-4">Eventos em Aberto</h2>

                    {eventos.length === 0 && <p className="text-white">Nenhum evento em aberto.</p>}

                    {eventos.map(evento => (
                        <div key={evento.id} className="w-full max-w-3xl bg-white text-black p-4 rounded-md shadow-md mb-4">
                            <h3 className="text-xl font-bold text-red-700 mb-2">{evento.titulo}</h3>
                            <p><strong>Data:</strong> {evento.data}</p>
                            <p><strong>Cargo:</strong> {evento.cargo}</p>
                            <p><strong>Descrição:</strong> {evento.descricao}</p>
                            <p><strong>Status:</strong> {evento.status}</p>

                            <div className="flex flex-wrap justify-center gap-2 mt-3">
                                {evento.status !== "Em andamento" && (
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-600  px-4 py-2 rounded-md w-40"
                                        onClick={() => mudarStatus(evento.id, "Em andamento")}
                                    >
                                        Em andamento
                                    </button>
                                )}

                                <button
                                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md w-40"
                                    onClick={() => mudarStatus(evento.id, "Resolvido")}
                                >
                                    Resolvido
                                </button>
                            </div>
                        </div>

                    ))}
                </section>
            </main>
        </>
    )
}

export default CompMonitorarEventos
