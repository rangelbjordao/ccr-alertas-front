export interface propEventos {
    id: number;
    titulo: string;
    descricao: string;
    local: string;
    data: string;
    cargo: string;
    status: "Sem resposta" | "Resolvido" | "Em andamento" | "Ajuda solicitada";
    ajudaSolicitada?: boolean;
}

export interface propSolicitarAjuda {
    id: number;
    type: string;
    position: string;
    status: string;
}


// export interface propLogins {
//     login: string
//     senha: string
//     cargo: string
// }

export type TipoDeEvento = {
    type: string;
    cargoResponsavel?: string;
};