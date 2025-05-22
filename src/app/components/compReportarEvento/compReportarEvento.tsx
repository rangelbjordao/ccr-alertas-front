"use client";

import { useEffect, useState } from "react";
import Botao from "../botao/botao";
import { useRouter } from "next/navigation";
import { API_BASE, getHeaders } from "@/app/services/api";
import { TipoDeEvento } from "@/app/types/props";


const CompReportarEventos = () => {
    const router = useRouter();

    const [tiposDeEventos, setTiposDeEventos] = useState<TipoDeEvento[]>([]);
    const [erroCampos, setErroCampos] = useState({ titulo: false, descricao: false, local: false });
    const [mensagemErro, setMensagemErro] = useState("");
    const [mensagemSucesso, setMensagemSucesso] = useState("");
    const [titulo, setTitulo] = useState<string>("");
    const [local, setLocal] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            router.push("/login");
        }
    }, [router]);

    useEffect(() => {
        const fetchTiposDeEventos = async () => {
            try {
                const resposta = await fetch(`${API_BASE}/reportar-evento`, {
                    method: "GET",
                    headers: getHeaders(),
                });
                if (resposta.ok) {
                    const dados: TipoDeEvento[] = await resposta.json();
                    setTiposDeEventos(dados);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchTiposDeEventos();
    }, []);

    const validarCampos = () => {
        const erros = {
            titulo: titulo.trim() === "",
            local: local.trim() === "",
            descricao: descricao.trim() === "",
        };
        setErroCampos(erros);

        const temErro = Object.values(erros).some(Boolean);
        if (temErro) {
            setMensagemErro("Por favor, preencha todos os campos corretamente.");
            setMensagemSucesso("");
        }
        return !temErro;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validarCampos()) return;

        setCarregando(true);
        setMensagemErro("");
        setMensagemSucesso("");

        try {
            const dados = {
                typeEvent: titulo,
                local_event: local,
                descricao,
            };

            const resposta = await fetch(`${API_BASE}/reportar-evento`, {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(dados),
            });

            if (resposta.ok) {
                setMensagemSucesso("Evento reportado com sucesso!");
                setTitulo("");
                setLocal("");
                setDescricao("");
            } else {
                setMensagemErro("Erro ao enviar o evento.");
            }
        } catch {
            setMensagemErro("Erro ao conectar com o servidor.");
        } finally {
            setCarregando(false);
        }
    };

    return (
        <main>
            <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">Reportar Evento</h1>

            <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="titulo-evento" className="mb-2">Selecionar Evento:</label>
                        <select
                            id="titulo-evento"
                            name="titulo-evento"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            className={`p-2 text-black rounded-md w-11/12 bg-white mx-auto ${erroCampos.titulo ? "border-2 border-red-500" : ""}`}
                            disabled={carregando}
                        >
                            <option value="">-- Selecione um evento --</option>
                            {tiposDeEventos.map((evento) => (
                                <option key={evento.type} value={evento.type}>
                                    {evento.type.replaceAll("_", " ").toLowerCase().replace(/^./, c => c.toUpperCase())}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="local-evento" className="mb-2">Local do Evento:</label>
                        <input
                            type="text"
                            id="local-evento"
                            name="local-evento"
                            value={local}
                            onChange={(e) => setLocal(e.target.value)}
                            className={`p-2 text-black rounded-md w-11/12 bg-white mx-auto ${erroCampos.local ? "border-2 border-red-500" : ""}`}
                            disabled={carregando}
                        />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="descricao-evento" className="mb-2">Descrição do Evento:</label>
                        <textarea
                            id="descricao-evento"
                            name="descricao-evento"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            className={`p-2 text-black rounded-md w-11/12 h-36 resize-none bg-white mx-auto ${erroCampos.descricao ? "border-2 border-red-500" : ""}`}
                            disabled={carregando}
                        />
                    </div>

                    {mensagemErro && <p className="text-red-500 font-bold">{mensagemErro}</p>}
                    {mensagemSucesso && <p className="text-blue-800 font-bold">{mensagemSucesso}</p>}

                    <Botao type="submit" texto="Enviar" carregando={carregando} />
                </form>
            </section>
        </main>
    );
};

export default CompReportarEventos;
