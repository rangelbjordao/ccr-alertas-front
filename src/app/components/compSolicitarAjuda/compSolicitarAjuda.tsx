const CompSolicitarAjuda = () => {
    return (
        <>
            {/* Título principal */}
            <main>
                <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">Solicitar Ajuda</h1>

                {/* Seção solicitar ajuda */}
                <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <form className="w-full max-w-md">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="selecionar-evento" className="mb-2">Selecione um Evento em Aberto:</label>
                            <select id="selecionar-evento" name="selecionar-evento" required className="p-2 text-black rounded-md w-11/12 bg-white mx-auto">
                                <option value="">-- Selecione um evento --</option>
                                <option value="evento1">Evento 1</option>
                                <option value="evento2">Evento 2</option>
                            </select>
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="descricao-ajuda" className="mb-2">Descrição da Ajuda:</label>
                            <textarea id="descricao-ajuda" name="descricao-ajuda" maxLength={500} required className="p-2 text-black rounded-md w-11/12 h-36 resize-none bg-white mx-auto"></textarea>
                        </div>

                        <button type="submit" className="bg-red-700 text-white border border-gray-800 rounded-md px-5 py-3 m-2 text-base cursor-pointer w-64 transition-colors duration-300 hover:bg-red-900 hover:border-gray-600 mx-auto">
                            Enviar
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default CompSolicitarAjuda;
