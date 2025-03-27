"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Botao from "../botao/botao";

const CompLogin = () => {
    const [ro, setRo] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [erroCampos, setErroCampos] = useState({ ro: false, senha: false });
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErro("");
        setErroCampos({ ro: !ro, senha: !senha });

        if (!ro || !senha) {
            setErro("Por favor, preencha todos os campos.");
            return;
        }

        setCarregando(true);

        setTimeout(() => {
            if (ro === "admin" && senha === "admin") {
                localStorage.setItem("authToken", "logado");
                window.dispatchEvent(new Event("storage"));
                router.push("/ccr-alertas");
            } else {
                setErro("RO ou Senha inválida!");
            }
            setCarregando(false);
        }, 1000);
    };

    return (
        <main className="mb-20">
            <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">
                CCR Alertas
            </h1>

            <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="ro" className="mb-2">RO:</label>
                        <input
                            type="text"
                            id="ro"
                            value={ro}
                            onChange={(e) => setRo(e.target.value)}
                            placeholder="Digite seu RO"
                            className={`p-2 text-black rounded-md w-11/12 bg-white mx-auto ${erroCampos.ro ? "border-2 border-red-500" : ""}`}
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="senha" className="mb-2">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua senha"
                            className={`p-2 text-black rounded-md w-11/12 bg-white mx-auto ${erroCampos.senha ? "border-2 border-red-500" : ""}`}
                        />
                    </div>
                    {erro && <p className="text-red-500 mb-4">{erro}</p>}

                    <Botao type="submit" texto="Conectar" carregando={carregando} />
                </form>
            </section>
        </main>
    );
};

export default CompLogin;
