'use client'

import { useParams } from "next/navigation";
import CompMonitorarEventos from "../../../components/compMonitorarEventos/compMonitorarEventos";

const MonitorarEventos = () => {
    const params = useParams();
    const cargoParam = params?.cargo;
    const cargo = typeof cargoParam === 'string' ? cargoParam : '';


    return (
        <>
            <CompMonitorarEventos cargo={cargo} />
        </>
    );
};

export default MonitorarEventos;
