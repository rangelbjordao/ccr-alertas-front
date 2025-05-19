'use client'

import { API_BASE, API_KEY } from "@/app/services/api";
import { propEventos } from "@/app/types/props";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

interface CargoProps {
    cargo: string;
}

const CompMonitorarEventos = ({ cargo }: CargoProps) => {
    const [eventos, setEventos] = useState<propEventos[]>([]);
    const router = useRouter();

    const mapearEventos = (dadosApi: any[]): propEventos[] => {
        return dadosApi.map((evento: any) => ({
            id: evento.id,
            titulo: evento.typeEvent.replace(/_/g, " "),
            descricao: evento.description,
            local: evento.local_event,
            data: new Date(evento.date_event).toLocaleString(),
            cargo: evento.position,
            status:
                evento.status === "SEM_RESPOSTA"
                    ? "Sem resposta"
                    : evento.status === "EM_ANDAMENTO"
                        ? "Em andamento"
                        : evento.status === "FINALIZADO"
                            ? "Resolvido"
                            : "Ajuda solicitada",
        }));
    };

    const mostrarEventos = useCallback(async () => {
        if (!cargo) return;

        const token = localStorage.getItem("authToken");
        if (!token) {
            router.push("/login");
            return;
        }

        try {
            const url = `${API_BASE}/monitorar-eventos/${cargo === "Admin" ? "admin" : cargo}`;

            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": API_KEY
                }
            });

            if (!response.ok) {
                throw new Error("Erro ao carregar eventos");
            }

            const dadosApi = await response.json();

            let eventosFiltrados = dadosApi;
            if (cargo.toLowerCase() !== "admin") {
                const normalize = (str: string) =>
                    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

                eventosFiltrados = dadosApi.filter(
                    (evento: any) => normalize(evento.position) === normalize(cargo)
                );
            }

            const eventosCarregados = mapearEventos(eventosFiltrados);
            setEventos(eventosCarregados);
        } catch (error) {
            console.error("Erro ao carregar eventos:", error);
        }
    }, [cargo, router]);


    useEffect(() => {
        mostrarEventos();
    }, [mostrarEventos]);


    const mudarStatus = async (id: number) => {
        try {
            const response = await fetch(`${API_BASE}/monitorar-eventos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": API_KEY
                }
            });

            if (!response.ok) {
                throw new Error("Erro ao atualizar status");
            }

            await mostrarEventos();
        } catch (error) {
            console.error("Erro ao atualizar evento:", error);
        }
    };

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
                            <h3
                                className={`text-xl font-bold mb-2 ${evento.status === "Sem resposta"
                                    ? "text-red-700"
                                    : evento.status === "Em andamento"
                                        ? "text-yellow-600"
                                        : evento.status === "Ajuda solicitada"
                                            ? "text-blue-700"
                                            : ""
                                    }`}
                            >
                                {evento.titulo}
                            </h3>

                            <p className="m-2"><strong>Cargo:</strong> {evento.cargo}</p>
                            <p className="m-2"><strong>Local:</strong> {evento.local}</p>
                            <p className="m-2"><strong>Descrição:</strong> {evento.descricao}</p>
                            <p className="m-2"><strong>Data:</strong> {evento.data}</p>
                            <p className="m-2"><strong>Status:</strong> {evento.status}</p>

                            <div className="flex flex-wrap justify-center gap-2 mt-3">
                                {evento.status === "Ajuda solicitada" ? (
                                    <button
                                        className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md w-40"
                                        onClick={() => mudarStatus(evento.id)}
                                    >
                                        Ajudar
                                    </button>
                                ) : evento.status === "Em andamento" ? (
                                    <button
                                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md w-40"
                                        onClick={() => mudarStatus(evento.id)}
                                    >
                                        Finalizar
                                    </button>
                                ) : (
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md w-40"
                                        onClick={() => mudarStatus(evento.id)}
                                    >
                                        Resolver
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}

export default CompMonitorarEventos;
