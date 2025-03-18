const CompMonitorarEventos = () => {
    return (
        <>
            {/* Título principal */}
            <main>
                <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">Monitorar Eventos</h1>

                {/* Seção eventos abertos */}
                <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <h2 className="text-2xl font-semibold mb-4">Eventos em Aberto</h2>

                    <div className="w-full max-w-3xl bg-white text-black p-4 rounded-md shadow-md mb-4">
                        <h3 className="text-xl font-bold text-red-700 mb-5">Evento 1</h3>
                        <p className="m-2"><strong>Data:</strong> 31 de outubro de 2024</p>
                        <p className="m-2"><strong>Descrição:</strong> Breve descrição do evento reportado.</p>
                        <p className="m-2"><strong>Local:</strong> Local do evento</p>
                        <p className="m-2"><strong>Status:</strong> Aguardando avaliação</p>
                    </div>

                    <div className="w-full max-w-3xl bg-white text-black p-4 rounded-md shadow-md">
                        <h3 className="text-xl font-bold text-red-700 mb-5">Evento 2</h3>
                        <p className="m-2"><strong>Data:</strong> 30 de outubro de 2024</p>
                        <p className="m-2"><strong>Descrição:</strong> Outra descrição do evento reportado.</p>
                        <p className="m-2"><strong>Local:</strong> Local do segundo evento</p>
                        <p className="m-2"><strong>Status:</strong> Em progresso</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CompMonitorarEventos
