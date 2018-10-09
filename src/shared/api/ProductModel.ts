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