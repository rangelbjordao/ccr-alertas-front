import { propLogins } from "../types/props";

export const API_BASE = 'http://localhost:8080';

export const API_KEY = "123456";


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
