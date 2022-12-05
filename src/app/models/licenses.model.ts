export interface licenses{
    total_results: number,
    items: License[],
}

export interface License{
    url: string,
    work_count: number,
}