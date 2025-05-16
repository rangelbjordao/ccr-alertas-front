import { propLogins } from "../types/props";

export const API_BASE = 'http://localhost:8080';

const API_KEY = "123456";

export async function fetchComApiKey(url: string, options: RequestInit = {}) {
    const headers = {
        ...(options.headers || {}),
        "X-API-Key": API_KEY,
    };

    console.log("Fetch com headers:", headers);

    const resposta = await fetch(url, {
        ...options,
        headers,
    });

    return resposta;
}


export const loginsFalsos: propLogins[] = [
    {
        login: "admin",
        senha: "admin",
        cargo: "Admin"
    },
    {
        login: "agente",
        senha: "agente",
        cargo: "Agente"
    },
    {
        login: "manutencao",
        senha: "manutencao",
        cargo: "Manutenção"
    },
    {
        login: "seguranca",
        senha: "seguranca",
        cargo: "Segurança"
    },
    {

        login: "limpeza",
        senha: "limpeza",
        cargo: "Limpeza"
    }
]

export const tiposDeEventosMockados = [
    { titulo: "FALHA_ESCADA_ROLANTE", cargoResponsavel: "Manutenção" },
    { titulo: "CONFLITO_PASSAGEIROS", cargoResponsavel: "Segurança" },
    { titulo: "PROBLEMA_ILUMINACAO", cargoResponsavel: "Manutenção" },
];
