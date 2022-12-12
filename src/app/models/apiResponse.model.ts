import { Works } from "./works.model";

export interface ApiResponseWork {
    status: string,
    message_type: string,
    message_version: string,
    message: Works,
}
export interface ApiResponse {
    status: string,
    message_type: string,
    message_version: string,
    message: Message,
}

export interface Message{
    facets: {},
    total_results:number,
    items: Works[],
    items_per_page: number,
    query: Query,
}

export interface Query{
    search_terms: string | null,
    start_index: number,
}