// lib/api.ts

export type Evento = {
    id: number;
    titulo: string;
    descricao: string;
    data: string; // formato dd/mm/aaaa
    cargo: string;
    status: "aberto" | "resolvido";
};

const eventosFalsos: Evento[] = [];

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
