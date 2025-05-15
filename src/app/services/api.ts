import { propLogins, TipoDeEventoFixo } from "../types/props";

export const API_BASE = 'http://localhost:8080';

const API_KEY = "123456";

export async function fetchComApiKey(url: string, options: RequestInit = {}) {
    const headers = {
        ...(options.headers || {}),
        "X-API-key": API_KEY,
    };

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


export const tiposDeEventosFixos: TipoDeEventoFixo[] = [
    { titulo: "CONFLITO_ENTRE_PASSAGEIROS", cargoResponsavel: "Segurança" },
    { titulo: "FUSIVEL_QUEBRADO", cargoResponsavel: "Técnico Manutenção" },
    { titulo: "ESCADA_ROLANTE_QUEBRADA", cargoResponsavel: "Técnico Manutenção" },
    { titulo: "PORTA_DE_EMERGENCIA_QUEBRADA", cargoResponsavel: "Técnico Manutenção" },
    { titulo: "VIDRO_QUEBRADO", cargoResponsavel: "Limpeza" },
    { titulo: "LIXEIRA_VAZANDO", cargoResponsavel: "Limpeza" },
];
