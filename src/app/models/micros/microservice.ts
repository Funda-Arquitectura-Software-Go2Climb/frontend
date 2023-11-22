export interface MicroService {
    id?: number;
    serviceId?: number;
    serviceName?: string;
    description: string;
    location?: string;
    score?: number;
    price?: number;
    newPrice?: number;
    creationDate?: string;
    photos?: string;
    isOffer?: boolean;
    isPopular?: boolean;
}
