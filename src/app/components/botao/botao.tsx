import React from "react";

type BotaoProps = {
    type?: "button" | "submit";
    carregando?: boolean;
    texto?: string;
}

const Botao: React.FC<BotaoProps> = ({
    type = "button",
    carregando = false,
    texto = ""
}) => {
    return (
        <>
            <button type={type} className={`bg-red-700 text-white border border-gray-800 rounded-md px-5 py-3 m-2 text-base cursor-pointer w-64 transition-colors duration-300 hover:bg-red-900 hover:border-gray-600 ${carregando ? "opacity-50 cursor-not-allowed" : ""}`} disabled={carregando}>
                {carregando ? "Carregando..." : texto}
            </button >
        </>
    )
}

export default Botao;