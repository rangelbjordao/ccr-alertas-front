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

export type TipoDeEvento = {
    type: string;
    cargoResponsavel?: string;
};

export type EventoApi = {
    id: number;
    typeEvent: string;
    description: string;
    local_event: string;
    date_event: string;
    position: string;
    status: "SEM_RESPOSTA" | "EM_ANDAMENTO" | "AJUDA_SOLICITADA" | "FINALIZADO";
};
