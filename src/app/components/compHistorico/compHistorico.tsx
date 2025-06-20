'use client'

import { API_BASE, getHeaders } from "@/app/services/api";
import { EventoApi, propEventos } from "@/app/types/props";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const CompHistorico = () => {
    const [eventos, setEventos] = useState<propEventos[]>([])
    const [cargo, setCargo] = useState<string | null>(null);
    const router = useRouter();


    const formatarStatus = (status: string): "Sem resposta" | "Resolvido" | "Em andamento" | "Ajuda solicitada" => {
        switch (status) {
            case "SEM_RESPOSTA":
                return "Sem resposta";
            case "FINALIZADO":
                return "Resolvido";
            case "EM_ANDAMENTO":
                return "Em andamento";
            case "AJUDA_SOLICITADA":
                return "Ajuda solicitada";
            default:
                return "Sem resposta";
        }
    };

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
            status: formatarStatus(evento.status)
        }));
    };


    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const storedCargo = localStorage.getItem("userCargo");

        if (!token || !storedCargo) {
            router.push("/login");
            return;
        }

        setCargo(storedCargo);
    }, [router]);


    // Funcao para buscar eventos resolvidos da API
    const mostrarEventos = useCallback(async () => {
        if (!cargo) return;

        try {
            const isAdmin = cargo?.toLowerCase() === "admin" || cargo?.toLowerCase() === "ti";
            const url = `${API_BASE}/historico/${isAdmin ? "admin" : cargo}`;

            const response = await fetch(url, {
                headers: getHeaders(),
            });

            if (!response.ok) {
                throw new Error("Erro ao carregar eventos resolvidos");
            }

            const dadosApi: EventoApi[] = await response.json();

            let eventosFiltrados = dadosApi;
            if (!isAdmin) {
                const normalize = (str: string) =>
                    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

                eventosFiltrados = dadosApi.filter(
                    (evento: EventoApi) => normalize(evento.position) === normalize(cargo)
                );
            }

            eventosFiltrados = eventosFiltrados.filter(evento => evento.status === "FINALIZADO");

            const eventosMapeados = mapearEventos(eventosFiltrados);
            const eventosOrdenados = eventosMapeados.slice().sort((a, b) => b.id - a.id);
            setEventos(eventosOrdenados);

        } catch (error) {
            console.error("Erro ao carregar eventos resolvidos:", error);
        }
    }, [cargo]);

    useEffect(() => {
        if (cargo) {
            mostrarEventos();
        }
    }, [cargo, mostrarEventos]);

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
                                <h3 className="text-xl font-bold mb-2 text-green-800 ">{evento.titulo}</h3>

                                <h4 className="mb-2">
                                    <strong>#{evento.id}</strong>
                                </h4>
                                <p className="m-2"><strong>Cargo:</strong> {evento.cargo}</p>
                                <p className="m-2"><strong>Local:</strong> {evento.local}</p>
                                <p className="m-2"><strong>Descrição:</strong> {evento.descricao}</p>
                                <p className="m-2"><strong>Data:</strong> {evento.data}</p>
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
