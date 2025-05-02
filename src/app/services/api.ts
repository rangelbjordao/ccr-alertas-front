// lib/api.ts

export type Evento = {
    id: number;
    titulo: string;
    descricao: string;
    data: string; // formato dd/mm/aaaa
    cargo: string;
    status: "aberto" | "resolvido" | "em andamento";
};

let eventosFalsos: Evento[] = [
    {
        id: 1,
        titulo: "Falha na Escada Rolante",
        data: "30/10/2024",
        cargo: "Manutenção",
        descricao: "Escada rolante parou de funcionar repentinamente.",
        status: "aberto"
    },
    {
        id: 2,
        titulo: "Conflito entre Passageiros",
        data: "31/10/2024",
        cargo: "Segurança",
        descricao: "Dois passageiros iniciaram uma discussão na plataforma.",
        status: "aberto"
    }
]
export async function buscarEventos(): Promise<Evento[]> {
    await new Promise((res) => setTimeout(res, 300));
    return eventosFalsos;
}

export async function enviarEvento(evento: Omit<Evento, "id" | "status">): Promise<{ sucesso: boolean }> {
    await new Promise((res) => setTimeout(res, 300));

    console.log("Evento recebido (mock):", evento);

    eventosFalsos.push({
        id: eventosFalsos.length + 1,
        ...evento,
        status: "aberto"
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