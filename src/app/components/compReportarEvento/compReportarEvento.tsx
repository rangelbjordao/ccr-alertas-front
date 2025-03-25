'use client'

import { useState } from "react";

const CompReportarEventos = () => {

    // Formatacao da data do evento
    const [dataEvento, setDataEvento] = useState("");
    const [erroCampos, setErroCampos] = useState({ titulo: false, descricao: false, data: false, cargo: false });
    const [mensagemErro, setMensagemErro] = useState("");
    const [mensagemSucesso, setMensagemSucesso] = useState("");
    const [cargoSelecionado, setCargoSelecionado] = useState("");

    const formatarData = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.length >= 2) {
            value = value.slice(0, 2) + "/" + value.slice(2);
        }
        if (value.length >= 5) {
            value = value.slice(0, 5) + "/" + value.slice(5, 9);
        }

        setDataEvento(value);
    };

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const novosErros = {
            titulo: titulo.trim() === "",
            cargo: cargoSelecionado === "",
            descricao: descricao.trim() === "",
            data: dataEvento.trim().length !== 10
        };

        setErroCampos(novosErros);

        if (Object.values(novosErros).includes(true)) {
            setMensagemErro("Por favor, preencha todos os campos corretamente.");
            setMensagemSucesso("");
            return;
        }

        setMensagemErro("");
        setMensagemSucesso("Evento reportado com sucesso!");

        setTitulo("");
        setCargoSelecionado("");
        setDescricao("");
        setDataEvento("");
    };



    return (
        <>
            <main>
                <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">Reportar Evento</h1>

                {/* Formulário para reportar evento */}
                <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <form className="w-full max-w-md" onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="titulo-evento" className="mb-2">Título do Evento:</label>
                            <input
                                type="text"
                                id="titulo-evento"
                                name="titulo-evento"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                className={`p-2 text-black rounded-md w-11/12 bg-white mx-auto ${erroCampos.titulo ? 'border-2 border-red-500' : ''}`}
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="selecionar-cargo" className="mb-2">Selecionar Cargo:</label>
                            <select
                                id="selecionar-cargo"
                                name="selecionar-cargo"
                                value={cargoSelecionado}
                                onChange={(e) => setCargoSelecionado(e.target.value)}
                                className={`p-2 text-black rounded-md w-11/12 bg-white mx-auto ${erroCampos.cargo ? 'border-2 border-red-500' : ''}`}
                            >
                                <option value="">-- Selecione um cargo --</option>
                                <option value="seguranca">Segurança</option>
                                <option value="limpeza">Limpeza</option>
                                <option value="manutencao">Manutenção</option>
                            </select>
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="descricao-evento" className="mb-2">Descrição do Evento:</label>
                            <textarea
                                id="descricao-evento"
                                name="descricao-evento"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                className={`p-2 text-black rounded-md w-11/12 h-36 resize-none bg-white mx-auto ${erroCampos.descricao ? 'border-2 border-red-500' : ''}`}
                            ></textarea>
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="data-evento" className="mb-2">Data do Evento (dd/mm/aaaa):</label>
                            <input
                                type="text"
                                id="data-evento"
                                name="data-evento"
                                placeholder="dd/mm/aaaa"
                                className={`p-2 text-black rounded-md w-11/12 bg-white mx-auto ${erroCampos.data ? 'border-2 border-red-500' : ''}`}
                                value={dataEvento}
                                onChange={formatarData}
                            />
                        </div>

                        {mensagemErro && <p className="text-red-500 font-bold font-sans">{mensagemErro}</p>}
                        {mensagemSucesso && <p className="text-blue-800 font-bold font-sans">{mensagemSucesso}</p>}

                        <button
                            type="submit"
                            className="bg-red-700 text-white border border-gray-800 rounded-md px-5 py-3 m-2 text-base cursor-pointer w-64 transition-colors duration-300 hover:bg-red-900 hover:border-gray-600 mx-auto"
                        >
                            Enviar
                        </button>
                    </form>
                </section>
            </main>
        </>
    );
}

export default CompReportarEventos;
