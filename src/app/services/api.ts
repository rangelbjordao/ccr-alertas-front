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
        login: "tecnico",
        senha: "tecnico",
        cargo: "Tecnico"
    },
    {
        login: "manutencao",
        senha: "manutencao",
        cargo: "Manutencao"
    },
    {
        login: "seguranca",
        senha: "seguranca",
        cargo: "Seguranca"
    },
    {

        login: "limpeza",
        senha: "limpeza",
        cargo: "Limpeza"
    }
]