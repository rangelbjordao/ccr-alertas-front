export default function Home() {
    return (
        <>
            {/* Título principal e descrição */}
            <main>
                <h1 className="my-2 text-center text-4xl font-bold">CCR Alertas</h1>
                <p className="my-2 text-center">O programa de alertas para os funcionários da CCR</p>

                {/* Seção de apresentação */}
                <section className="flex flex-col items-center p-5 my-5 bg-[#999999] text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <h2 className="text-3xl font-semibold mb-4">Como CCR Alertas pode transformar as operações</h2>
                    <p>O software CCR Alertas foi desenvolvido para melhorar a comunicação e a segurança operacional durante as
                        operações, garantindo a transmissão rápida, eficiente e precisa de informações críticas,
                        independentemente da localização ou das condições de trabalho. </p>
                </section>

                {/* Seção de vantagens */}
                <section className="flex flex-col items-center p-5 my-5 bg-[#999999] text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">

                    <h2 className="text-3xl font-semibold mb-2">Vantagens</h2>

                    <div className="flex flex-wrap gap-4 mt-2 justify-center">

                        <div className="bg-white text-black rounded-lg shadow-md w-full sm:w-[48%] p-4">
                            <h3 className="mt-0 text-center text-xl font-semibold mb-4">Melhoria na Segurança</h3>

                            <p>Com alertas imediatos, a segurança é priorizada, minimizando riscos e prevenindo acidentes.</p>
                        </div>

                        <div className="bg-white text-black rounded-lg shadow-md w-full sm:w-[48%] p-4">
                            <h3 className="mt-0 text-center text-xl font-semibold mb-4">Aumento da Eficiência</h3>

                            <p>As funcionalidades de reportar eventos e solicitar ajuda melhoram a colaboração entre a equipe,
                                aumentando a eficiência.</p>
                        </div>

                        <div className="bg-white text-black rounded-lg shadow-md w-full sm:w-[48%] p-4">
                            <h3 className="mt-0 text-center text-xl font-semibold mb-4">Registros para Análise de dados</h3>

                            <p>Os alertas ficam registrados no histórico, facilitando a análise de dados e melhorando decisões
                                futuras.</p>
                        </div>

                        <div className="bg-white text-black rounded-lg shadow-md w-full sm:w-[48%] p-4">
                            <h3 className="mt-0 text-center text-xl font-semibold mb-4">Uso em Ambientes Barulhentos</h3>

                            <p>Em ambientes com muito ruído, é mais fácil visualizar um alerta do que escutar a comunicação pelo
                                rádio.</p>
                        </div>
                    </div>
                </section>

                {/* Seção de funcionalidades */}
                <section className="flex flex-col items-center p-5 my-5 bg-[#999999] text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">

                    <h2 className="text-3xl font-semibold mb-2">Funcionalidades</h2>

                    <div className="flex flex-wrap gap-4 mt-2 justify-center">

                        <div className="bg-white text-black rounded-lg shadow-md w-full sm:w-[48%] p-4">
                            <h3 className="mt-0 text-center text-xl font-semibold mb-4">Reportar Eventos</h3>

                            <p>Permite que os funcionários gerem alertas sobre problemas nas estações e linhas, seguindo três
                                etapas: Escolher a situação, o grupo que será destinado e definição do grau da gravidade.</p>
                        </div>

                        <div className="bg-white text-black rounded-lg shadow-md w-full sm:w-[48%] p-4">
                            <h3 className="mt-0 text-center text-xl font-semibold mb-4">Monitorar eventos em aberto</h3>

                            <p>Permite que os funcionários acompanhem, em tempo real, todos os incidentes ou problemas que foram
                                reportados e ainda estão pendentes de resolução.</p>
                        </div>

                        <div className="bg-white text-black rounded-lg shadow-md w-full sm:w-[48%] p-4">
                            <h3 className="mt-0 text-center text-xl font-semibold mb-4">Solicitar Ajuda</h3>

                            <p>Permite que o funcionários solicitem ajuda para resolver um problema em aberto quando preciso,
                                criando uma nova notificação para os funcionários do mesmo cargo.</p>
                        </div>

                        <div className="bg-white text-black rounded-lg shadow-md w-full sm:w-[48%] p-4">
                            <h3 className="mt-0 text-center text-xl font-semibold mb-4">Registro dos Alertas</h3>

                            <p>O software mantém um histórico de alertas, fornecendo informações que facilitam a identificação de padrões e auxiliam na tomada de decisões para melhorias e solução de problemas.</p>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
