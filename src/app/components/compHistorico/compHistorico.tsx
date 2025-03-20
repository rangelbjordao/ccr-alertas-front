const CompHistorico = () => {
    return (
        <>
            <main>
                <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">Histórico de Eventos</h1>

                {/* Seção Histórico */}
                <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <h2 className="text-2xl font-semibold mb-4">Eventos Resolvidos</h2>

                    <div className="w-full max-w-3xl bg-white text-black p-4 rounded-md shadow-md mb-4">
                        <h3 className="text-xl font-bold text-red-700 mb-5">Falha na Iluminação</h3>
                        <p className="m-2"><strong>Data:</strong> 15 de outubro de 2024</p>
                        <p className="m-2"><strong>Cargo:</strong> Manutenção</p>
                        <p className="m-2"><strong>Descrição:</strong> Luzes do banheiro com defeito.</p>
                        <p className="m-2"><strong>Local:</strong> Banheiro masculino</p>
                        <p className="m-2"><strong>Status:</strong> Resolvido</p>
                    </div>


                    <div className="w-full max-w-3xl bg-white text-black p-4 rounded-md shadow-md">
                        <h3 className="text-xl font-bold text-red-700 mb-5">Derramamento de Líquido na Plataforma</h3>
                        <p className="m-2"><strong>Data:</strong> 20 de outubro de 2024</p>
                        <p className="m-2"><strong>Cargo:</strong> Limpeza</p>
                        <p className="m-2"><strong>Descrição:</strong> Café foi derramado na plataforma de embarque.</p>
                        <p className="m-2"><strong>Local:</strong> Plataforma 5</p>
                        <p className="m-2"><strong>Status:</strong> Resolvido</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CompHistorico;
