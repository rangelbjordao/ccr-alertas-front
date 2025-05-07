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