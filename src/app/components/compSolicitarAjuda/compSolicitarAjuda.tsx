'use client'

import { useState, useEffect } from "react";
import Botao from "../botao/botao";
import { propSolicitarAjuda } from "@/app/types/props";
import { useRouter } from "next/navigation";
import { API_BASE, getHeaders } from "@/app/services/api";

const CompSolicitarAjuda = () => {
    const [eventoSelecionado, setEventoSelecionado] = useState<number | "">("");
    const [descricaoAjuda, setDescricaoAjuda] = useState("");
    const [erroCampos, setErroCampos] = useState({ evento: false, descricao: false });
    const [mensagemErro, setMensagemErro] = useState("");
    const [mensagemSucesso, setMensagemSucesso] = useState("");
    const [eventos, setEventos] = useState<propSolicitarAjuda[]>([]);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (!token) {
            router.push("/login");
            return;
        }
    }, [router]);


    const fetchEventos = async () => {
        try {
            const resposta = await fetch(`${API_BASE}/solicitar-ajuda`, {
                headers: getHeaders()
            });

            if (!resposta.ok) {
                const textoErro = await resposta.text();
                console.error("Erro na resposta da API:", textoErro);
                return;
            }

            const dados = await resposta.json();
            setEventos(dados);


        } catch (erro) {
            console.error("Erro ao buscar eventos:", erro);
        }
    };

    useEffect(() => {
        fetchEventos();
    }, []);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const novosErros = {
            evento: eventoSelecionado === "",
            descricao: descricaoAjuda.trim() === ""
        };

        setErroCampos(novosErros);

        if (novosErros.evento || novosErros.descricao) {
            setMensagemErro("Por favor, preencha todos os campos corretamente.");
            setMensagemSucesso("");
            return;
        }

        try {
            const resposta = await fetch(`${API_BASE}/solicitar-ajuda/${eventoSelecionado}`, {
                method: "PUT",
                headers: getHeaders(),
                body: JSON.stringify({
                    descricao: descricaoAjuda
                })
            });

            if (resposta.ok) {
                setMensagemSucesso("Ajuda solicitada com sucesso!");
                setMensagemErro("");
                setDescricaoAjuda("");
                setEventoSelecionado("");
                fetchEventos();
            }
            else {
                const textoErro = await resposta.text();
                console.error("Erro ao solicitar ajuda:", textoErro);
                setMensagemErro("Erro ao solicitar ajuda.");
                setMensagemSucesso("");
            }
        } catch (erro) {
            console.error("Erro na requisição:", erro);
            setMensagemErro("Erro inesperado ao solicitar ajuda.");
            setMensagemSucesso("");
        }
    };


    return (
        <main>
            <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">Solicitar Ajuda</h1>

            {/* Formulario solicitar ajuda */}
            <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="selecionar-evento" className="mb-2">Selecione um Evento em Andamento:</label>
                        <select
                            id="selecionar-evento"
                            name="selecionar-evento"
                            value={eventoSelecionado}
                            onChange={(e) => setEventoSelecionado(e.target.value === "" ? "" : Number(e.target.value))}
                            className={`p-2 text-black rounded-md w-11/12 bg-white mx-auto ${erroCampos.evento ? 'border-2 border-red-500' : ''}`}
                        >
                            <option value="">-- Selecione um evento --</option>
                            {eventos.map((evento) => (
                                <option
                                    key={evento.id}
                                    value={evento.id}
                                >
                                    #{evento.id} - {evento.type.replaceAll("_", " ").toLowerCase().replace(/^./, c => c.toUpperCase())}
                                </option>

                            ))}
                        </select>

                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="descricao-ajuda" className="mb-2">Descrição da Ajuda:</label>
                        <textarea
                            id="descricao-ajuda"
                            name="descricao-ajuda"
                            maxLength={500}
                            value={descricaoAjuda}
                            onChange={(e) => setDescricaoAjuda(e.target.value)}
                            className={`p-2 text-black rounded-md w-11/12 h-36 resize-none bg-white mx-auto ${erroCampos.descricao ? 'border-2 border-red-500' : ''}`}
                        ></textarea>
                    </div>

                    {mensagemErro && <p className="text-red-500 font-bold">{mensagemErro}</p>}
                    {mensagemSucesso && <p className="text-blue-800 font-bold">{mensagemSucesso}</p>}

                    <Botao type="submit" texto="Enviar" />
                </form>
            </section>
        </main>
    );
}

export default CompSolicitarAjuda;
