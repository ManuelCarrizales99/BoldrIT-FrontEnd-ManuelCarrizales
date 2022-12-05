import { CoverageFull, DoiCounts, Flags } from "./journals.model";

export interface Member{
    last_status_check_time: number,
    primary_name: string,
    counts: DoiCounts,
    breakdowns: MembersMessageMessageItemsBreakdowns,
    prefixes: string[],
    coverage: CoverageFull,
    prefix: Member[],
    id: number,
    tokens: string[],
    counts_type: MembersMessageMessageItemsCountsType,
    coverage_type: MembersMessageMessageItemsCoverageType,
    flags: Flags,
    location: string,
    names: string[],
}

export interface MembersMessageMessageItemsCountsTypeBackfile{
    membersMessageMessageItemsCountsTypeBackfile: number
}

export interface MembersMessageMessageItemsCountsTypeCurrent{
    membersMessageMessageItemsCountsTypeCurrent: number
}

export interface MembersMessageMessageItemsCountsTypeAll{
    membersMessageMessageItemsCountsTypeAll: number
}

export interface MembersMessageMessageItemsCoverageType{
    all: MembersMessageMessageItemsCountsTypeAll,
    current: MembersMessageMessageItemsCountsTypeCurrent,
    backfile: MembersMessageMessageItemsCountsTypeBackfile,
}
export interface MembersMessageMessageItemsCountsType{
    all: MembersMessageMessageItemsCountsTypeAll,
    current: MembersMessageMessageItemsCountsTypeCurrent,
    backfile: MembersMessageMessageItemsCountsTypeBackfile,
}

export interface Member{
    name: string
    value: string
}

export interface MembersMessageMessageItemsBreakdowns{
    dois_by_issued_year: [
        [
            number
        ]
    ]
}