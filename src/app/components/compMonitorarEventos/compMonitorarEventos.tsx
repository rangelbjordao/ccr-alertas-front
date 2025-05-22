'use client'

import { API_BASE, getHeaders } from "@/app/services/api";
import { EventoApi, propEventos } from "@/app/types/props";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

const mapearEventos = (dadosApi: EventoApi[]): propEventos[] => {
    return dadosApi.map((evento) => ({
        id: evento.id,
        titulo: evento.typeEvent.replace(/_/g, " "),
        descricao: evento.description,
        local: evento.local_event,
        data: new Date(evento.date_event).toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }),
        cargo: evento.position,
        status:
            evento.status === "SEM_RESPOSTA"
                ? "Sem resposta"
                : evento.status === "EM_ANDAMENTO"
                    ? "Em andamento"
                    : evento.status === "AJUDA_SOLICITADA"
                        ? "Ajuda solicitada"
                        : "Resolvido",
    }));
};

const CompMonitorarEventos = () => {
    const [eventos, setEventos] = useState<propEventos[]>([]);
    const [cargo, setCargo] = useState<string | null>(null);
    const [erro, setErro] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const storedCargo = localStorage.getItem("userCargo");

        if (!token || !storedCargo) {
            router.push("/login");
            return;
        }

        setCargo(storedCargo);
    }, [router]);

    const mostrarEventos = useCallback(async () => {
        if (!cargo) return;

        try {
            setErro(null);
            const isAdmin = cargo.toLowerCase() === "admin" || cargo.toLowerCase() === "ti";
            const url = `${API_BASE}/monitorar-eventos/${isAdmin ? "admin" : cargo.toLowerCase()}`;

            const response = await fetch(url, { headers: getHeaders() });

            if (!response.ok) {
                throw new Error("Erro ao carregar eventos");
            }

            let dadosApi = await response.json();

            if (!isAdmin) {
                const normalize = (str: string) =>
                    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

                dadosApi = dadosApi.filter(
                    (evento: EventoApi) => normalize(evento.position) === normalize(cargo)
                );
            }

            const eventosAtivos = dadosApi.filter((evento: EventoApi) => evento.status !== "FINALIZADO");

            const eventosMapeados = mapearEventos(eventosAtivos);

            const eventosOrdenados = eventosMapeados.sort((a, b) => b.id - a.id);

            setEventos(eventosOrdenados);

        } catch (error) {
            console.error(error);
            setErro("Não foi possível carregar os eventos. Tente novamente mais tarde.");
        }
    }, [cargo]);

    useEffect(() => {
        if (cargo) {
            mostrarEventos();
        }
    }, [cargo, mostrarEventos]);

    const mudarStatus = async (id: number) => {
        try {
            const response = await fetch(`${API_BASE}/monitorar-eventos/${id}`, {
                method: "PUT",
                headers: getHeaders(),
            });

            if (!response.ok) {
                throw new Error("Erro ao atualizar status");
            }

            await mostrarEventos();
        } catch (error) {
            console.error(error);
            setErro("Não foi possível atualizar o evento.");
        }
    };

    return (
        <main>
            <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">Monitorar Eventos</h1>

            <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                <h2 className="text-2xl font-semibold mb-4">Eventos em Aberto</h2>

                {erro && <p className="text-red-500 font-bold mb-4">{erro}</p>}

                {eventos.length === 0 && !erro && (
                    <p className="text-white">Nenhum evento em aberto.</p>
                )}

                {eventos.map((evento) => (
                    <div
                        key={evento.id}
                        className="w-full max-w-3xl bg-white text-black p-4 rounded-md shadow-md mb-4"
                    >
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

                        <h4 className="mb-2"><strong>#{evento.id}</strong></h4>
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
    );
};

export default CompMonitorarEventos;
