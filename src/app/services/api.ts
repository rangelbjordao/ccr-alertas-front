import { propLogins } from "../types/props";

export const API_BASE = 'http://localhost:8080';

const API_KEY = "123456";

export default async function fetchComApiKey(url: string, options: RequestInit = {}) {
    const headers = {
        "X-API-Key": API_KEY,
        ...(options.headers || {}),
    };

    return fetch(url, {
        ...options,
        headers,
    });
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