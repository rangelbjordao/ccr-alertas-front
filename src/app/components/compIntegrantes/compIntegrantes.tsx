import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const CompIntegrantes = () => {
    return (
        <>
            <div className="text-center p-6">
                <h1 className="text-3xl font-bold mb-6">Conheça Nossa Equipe</h1>

                <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                    <h2 className="text-2xl font-semibold mb-4">Nossos Integrantes</h2>
                    <div>
                        <article>
                            <Image
                                src="/images/foto-eduardo.jpg"
                                alt="Foto do integrante Eduardo Osterloh Bindo"
                                width={500}
                                height={500}
                                className="aspect-square mx-auto rounded-md w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 max-w-full max-h-full"
                            />
                            <h3 className=" mb-2.5 text-xl font-semibold mt-4">Eduardo Osterloh Bindo</h3>
                            <p className="mb-2.5">RM: 559755</p>
                            <p className="mb-2.5">Turma: 1TDSPA</p>
                            <a
                                href="https://www.linkedin.com/in/eduardo-osterloh-bindo-500b02268/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 text-5xl hover:text-blue-800 transition mt-2 inline-block"
                            >
                                <FaLinkedin />
                            </a>
                        </article>

                        <article>
                            <Image
                                src="/images/foto-lucas.jpg"
                                alt="Foto do integrante Lucas José Lima"
                                width={500}
                                height={500}
                                className="aspect-square mx-auto rounded-md w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 max-w-full max-h-full"
                            />
                            <h3 className="mb-2.5 text-xl font-semibold mt-4">Lucas José Lima</h3>
                            <p className="mb-2.5">RM: 561160</p>
                            <p className="mb-2.5">Turma: 1TDSPA</p>
                            <a
                                href="https://www.linkedin.com/in/lucasjos%C3%A9lima/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 text-5xl hover:text-blue-800 transition mt-2 inline-block"
                            >
                                <FaLinkedin />
                            </a>
                        </article>

                        <article>
                            <Image
                                src="/images/foto-rangel.jpg"
                                alt="Foto do integrante Rangel Bernardi Jordão"
                                width={500}
                                height={500}
                                className="aspect-square mx-auto rounded-md w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 max-w-full max-h-full"
                            />
                            <h3 className="mb-2.5 text-xl font-semibold mt-4">Rangel Bernardi Jordão</h3>
                            <p className="mb-2.5">RM: 560547</p>
                            <p className="mb-2.5">Turma: 1TDSPA</p>
                            <a
                                href="https://www.linkedin.com/in/rangel-jord%C3%A3o-819334234/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 text-5xl hover:text-blue-800 transition mt-2 inline-block"
                            >
                                <FaLinkedin />
                            </a>
                        </article>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8">GitHub da equipe</h2>
                    <a
                        href="https://github.com/signalProteam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-800 text-5xl hover:text-black transition inline-block mt-2"
                    >
                        <FaGithub />
                    </a>
                </section>
            </div>
        </>
    )
}

export default CompIntegrantes