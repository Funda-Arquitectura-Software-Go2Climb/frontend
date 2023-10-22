import { Activity } from "./activity";

export interface Travel{
    id: number;
    titulo: string;
    descripcion: string;
    logo: string;
    agencyId: number;
    lugar: string;
    correo: string;
    telefono: number;
    fechaRegistro: string;
    precio: number;
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
    photo5: string;
    activities: Activity[];
}