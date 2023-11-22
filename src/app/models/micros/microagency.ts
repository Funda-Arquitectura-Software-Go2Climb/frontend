import { MicroService } from "./microservice";

export interface MicroAgency {
    id?: number;
    name?: string;
    email?: string;
    password?: string; // Considera la seguridad de la contraseña
    phoneNumber?: number;
    description?: string;
    location?: string;
    ruc?: number;
    photo?: string;
    score?: number;
    services?: MicroService[];
}
