export default interface ProductAttributes {
    id?: string;
    name?: string;
    price?: number;
    type?: string;
    archived?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface ProductItem {
    id?: string;
    name?: string;
    price?: number;
    type?: string;
}

export interface FindAllParams {
    page?: number;
    size?: number;
}

export interface FindAllResponse {
    products: ProductItem[];
    page: PageResponse;
}

export interface PageResponse {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}