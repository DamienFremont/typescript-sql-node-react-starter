export default interface PageResponse {
    size?: number;
    totalElements?: number;
    totalPages?: number;
    number?: number;
}

export default interface PageRequest {
    page?: number;
    size?: number;
    sort?: any;
}