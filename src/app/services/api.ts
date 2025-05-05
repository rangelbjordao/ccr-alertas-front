export type Evento = {
    id: number;
    titulo: string;
    descricao: string;
    data: string;
    cargo: string;
    status: "Sem resposta" | "Resolvido" | "Em andamento" | "Ajuda solicitada";
    ajudaSolicitada?: boolean;
};

export const cargos = ["Segurança", "Manutenção", "Limpeza", "Agente"];

let eventosFalsos: Evento[] = [
    {
        id: 1,
        titulo: "Falha na Escada Rolante",
        data: "30/10/2024",
        cargo: "Manutenção",
        descricao: "Escada rolante parou de funcionar repentinamente.",
        status: "Sem resposta",
        ajudaSolicitada: false
    },
    {
        id: 2,
        titulo: "Conflito entre Passageiros",
        data: "31/10/2024",
        cargo: "Segurança",
        descricao: "Dois passageiros iniciaram uma discussão na plataforma.",
        status: "Em andamento",
        ajudaSolicitada: false
    },
    {
        id: 3,
        titulo: "Problema na Iluminação",
        data: "25/10/2024",
        cargo: "Manutenção",
        descricao: "Lâmpada queimada na estação.",
        status: "Resolvido",
        ajudaSolicitada: false
    }
];


export async function buscarEventos(): Promise<Evento[]> {
    await new Promise((res) => setTimeout(res, 300));
    return eventosFalsos;
}

function dataFormatada(data: string): Date {
    const [dia, mes, ano] = data.split("/").map(Number);
    return new Date(ano, mes - 1, dia);
}

export function ordenaEventosPorData(eventos: Evento[]): Evento[] {
    const listaEventos = [...eventos];
    return listaEventos.sort((a, b) => {
        const dataA = dataFormatada(a.data);
        const dataB = dataFormatada(b.data);
        return dataB.getTime() - dataA.getTime();
    });
}

export async function carregarEventos(status: ("Sem resposta" | "Resolvido" | "Em andamento" | "Ajuda solicitada")[]): Promise<Evento[]> {
    const eventos = await buscarEventos();
    const eventosFiltrados = eventos.filter(evento => status.includes(evento.status));
    return ordenaEventosPorData(eventosFiltrados);
}

export async function enviarEvento(evento: Omit<Evento, "id" | "status">): Promise<{ sucesso: boolean }> {
    await new Promise((res) => setTimeout(res, 300));

    console.log("Evento recebido (mock):", evento);

    eventosFalsos.unshift({
        id: eventosFalsos.length + 1,
        ...evento,
        status: "Sem resposta"
    });

    return { sucesso: true };
}

export async function atualizarStatusEvento(
    id: number,
    novoStatus: Evento["status"]
): Promise<void> {
    const evento = eventosFalsos.find(ev => ev.id === id);
    if (evento) {
        evento.status = novoStatus;
    }
}

export async function solicitarAjudaParaEvento(id: number, novaDescricao: string): Promise<{ sucesso: boolean }> {
    const evento = eventosFalsos.find(ev => ev.id === id);
    if (evento) {
        evento.status = "Ajuda solicitada";
        evento.descricao = novaDescricao;
        return { sucesso: true };
    }
    return { sucesso: false };
}

