export interface Funder{
    id: string,
    location: string,
    name: string,
    alt_names: string[],
    uri:string,
    replaces:string[],
    replaced_by:string[],
    tokens:string[]
}