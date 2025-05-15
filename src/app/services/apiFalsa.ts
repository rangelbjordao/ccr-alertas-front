/* import { propEventos, propLogins } from "../types/props";

export const tiposDeEventos = [
    { titulo: "Falha na Escada Rolante", cargoResponsavel: "Manutenção" },
    { titulo: "Conflito entre Passageiros", cargoResponsavel: "Segurança" },
    { titulo: "Problema na Iluminação", cargoResponsavel: "Manutenção" },
    { titulo: "Alagamento", cargoResponsavel: "Limpeza" },
    { titulo: "Atraso na Linha", cargoResponsavel: "Agente" }
];

export const cargos = ["Segurança", "Manutenção", "Limpeza", "Agente"];

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

const eventosFalsos: propEventos[] = [
    {
        id: 1,
        titulo: "Falha na Escada Rolante",
        data: "02/11/2024",
        cargo: "Manutenção",
        local: "Plataforma 2",
        descricao: "Escada rolante parou de funcionar repentinamente.",
        status: "Sem resposta",
        ajudaSolicitada: false
    },
    {
        id: 2,
        titulo: "Conflito entre Passageiros",
        data: "31/10/2024",
        cargo: "Segurança",
        local: "Plataforma 3",
        descricao: "Dois passageiros iniciaram uma discussão na plataforma.",
        status: "Em andamento",
        ajudaSolicitada: false
    },
    {
        id: 3,
        titulo: "Problema na Iluminação",
        data: "02/11/2024",
        cargo: "Manutenção",
        local: "Plataforma 1",
        descricao: "Lâmpada queimada na estação.",
        status: "Resolvido",
        ajudaSolicitada: false
    },
    {
        id: 4,
        titulo: "Lixeira Transbordando",
        data: "01/11/2024",
        cargo: "Limpeza",
        local: "Entrada Principal",
        descricao: "Lixeira cheia e mau cheiro no local.",
        status: "Sem resposta",
        ajudaSolicitada: false
    },
    {
        id: 5,
        titulo: "Passageiro com Dificuldade de Mobilidade",
        data: "01/11/2024",
        cargo: "Agente",
        local: "Bilheteria",
        descricao: "Passageiro solicitou auxílio para embarcar.",
        status: "Sem resposta",
        ajudaSolicitada: false
    },
    {
        id: 6,
        titulo: "Aglomeração na Plataforma",
        data: "01/11/2024",
        cargo: "Segurança",
        local: "Plataforma 4",
        descricao: "Grande número de pessoas aguardando embarque.",
        status: "Sem resposta",
        ajudaSolicitada: false
    }
];


export async function buscarEventos(): Promise<propEventos[]> {
    await new Promise((res) => setTimeout(res, 300));
    return eventosFalsos;
}

function dataFormatada(data: string): Date {
    const [dia, mes, ano] = data.split("/").map(Number);
    return new Date(ano, mes - 1, dia);
}

export function ordenaEventosPorData(eventos: propEventos[]): propEventos[] {
    const listaEventos = [...eventos];
    return listaEventos.sort((a, b) => {
        const dataA = dataFormatada(a.data);
        const dataB = dataFormatada(b.data);
        return dataB.getTime() - dataA.getTime();
    });
}

export async function carregarEventos(status: ("Sem resposta" | "Resolvido" | "Em andamento" | "Ajuda solicitada")[]): Promise<propEventos[]> {
    const eventos = await buscarEventos();
    const eventosFiltrados = eventos.filter(evento => status.includes(evento.status));
    return ordenaEventosPorData(eventosFiltrados);
}

export async function enviarEvento(evento: Omit<propEventos, "id" | "status">): Promise<{ sucesso: boolean }> {
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
    novoStatus: propEventos["status"]
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

 */