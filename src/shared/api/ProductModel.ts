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

export interface FindParams {
    page?: number;
    size?: number;
}

export interface PageResponse {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}

export interface FindAllResponse {
    products: ProductItem[];
    page: PageResponse;
}