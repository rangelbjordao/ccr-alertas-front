'use client'

import { useState } from "react";

const CompReportarEventos = () => {

    // Formatacao da data do evento
    const [dataEvento, setDataEvento] = useState("");

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

    return (
        <>

            {/* Título principal */}
            <main>
                <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">Reportar Evento</h1>
                {/* Formulário para reportar evento */}
                <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <form className="w-full max-w-md">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="titulo-evento" className="mb-2">Título do Evento:</label>
                            <input type="text" id="titulo-evento" name="titulo-evento" required className="p-2 text-black rounded-md w-3/4 bg-white mx-auto" />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="descricao-evento" className="mb-2">Descrição do Evento:</label>
                            <textarea id="descricao-evento" name="descricao-evento" required className="p-2 text-black rounded-md w-3/4 h-36 resize-none bg-white mx-auto"></textarea>
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="data-evento" className="mb-2">Data do Evento (dd/mm/aaaa):</label>
                            <input type="text" id="data-evento" name="data-evento" required placeholder="dd/mm/aaaa" className="p-2 text-black rounded-md w-3/4 bg-white mx-auto" value={dataEvento} onChange={formatarData} />
                        </div>

                        <button type="submit" className="bg-red-700 text-white border border-gray-800 rounded-md px-5 py-3 m-2 text-base cursor-pointer w-64 transition-colors duration-300 hover:bg-red-900 hover:border-gray-600">Enviar</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default CompReportarEventos