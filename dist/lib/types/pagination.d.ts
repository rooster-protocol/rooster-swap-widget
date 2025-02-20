export interface PaginationReq {
    page?: number;
    perPage?: number;
    sortBy?: string;
    order?: "asc" | "desc";
    search?: string;
}
export interface PaginationRes {
    order: string;
    page: number;
    perPage: number;
    sortBy: string;
    total: number;
    totalPages: number;
}
