"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Botao from "../botao/botao";
import { API_BASE, getHeaders } from "@/app/services/api";


const CompLogin = () => {
    const [ro, setRo] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [erroCampos, setErroCampos] = useState({ ro: false, senha: false });
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro("");
        setErroCampos({ ro: !ro, senha: !senha });

        if (!ro || !senha) {
            setErro("Por favor, preencha todos os campos.");
            return;
        }

        setCarregando(true);

        try {
            const response = await fetch(`${API_BASE}/login`, {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify({ username: ro, password: senha }),
            });

            if (response.ok) {
                const data = await response.json();

                localStorage.setItem("authToken", "logado");
                localStorage.setItem("userCargo", data.cargo || "Cargo desconhecido");

                window.dispatchEvent(new Event("storage"));
                router.push("/ccr-alertas");
            } else if (response.status === 401) {
                setErro("Usuário ou senha inválidos!");
            } else {
                setErro("Erro inesperado. Tente novamente mais tarde.");
            }
        } catch (error) {
            console.error("Erro ao conectar à API:", error);
            setErro("Não foi possível conectar ao servidor.");
        } finally {
            setCarregando(false);
        }
    };

    return (
        <main className="mb-20">
            <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">
                CCR Alertas
            </h1>

            <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="ro" className="mb-2">Usuário:</label>
                        <input
                            type="text"
                            id="ro"
                            value={ro}
                            onChange={(e) => setRo(e.target.value)}
                            placeholder="Digite seu Usuário"
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
