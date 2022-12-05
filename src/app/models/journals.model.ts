export interface Journals{
    last_status_check_time: number,
    counts: DoiCounts,
    breakdowns: JournalsMessageMessageItemsBreakdowns,
    publisher: string,
    coverage: CoverageFull,
    title: string,
    subjects: string[],
    coverage_type: JournalsMessageMessageItemsCoverageType,
    flags: Flags,
    ISSN: string[],
    issn_type: JournalIssnType,
}

export interface JournalIssnType{
    value: string
    type: string
}

export interface Flags{
    deposits_abstracts_current: boolean,
    deposits_orcids_current: boolean,
    deposits: boolean,
    deposits_affiliations_backfile: boolean,
    deposits_update_policies_backfile: boolean,
    deposits_award_numbers_current: boolean,
    deposits_resource_links_current: boolean,
    deposits_ror_ids_current: boolean,
    deposits_articles: boolean,
    deposits_affiliations_current: boolean,
    deposits_funders_current: boolean,
    deposits_references_backfile: boolean,
    deposits_ror_ids_backfile: boolean,
    deposits_abstracts_backfile: boolean,
    deposits_licenses_backfile: boolean,
    deposits_award_numbers_backfile: boolean,
    deposits_descriptions_current: boolean,
    deposits_references_current: boolean,
    deposits_resource_links_backfile: boolean,
    deposits_descriptions_backfile: boolean,
    deposits_orcids_backfile: boolean,
    deposits_funders_backfile: boolean,
    deposits_update_policies_current: boolean,
    deposits_licenses_current: boolean,
}

export interface Coverage{
    last_status_check_time: number
    affiliations: number
    abstracts: number
    orcids: number
    licenses: number
    references: number
    funders: number
    similarity_checking: number
    award_numbers: number
    ror_ids: number
    update_policies: number
    resource_links: number
    descriptions: number
}
export interface JournalsMessageMessageItemsCoverageType{
    all: Coverage,
    current: Coverage,
    backFile: Coverage,
}

export interface DoiCounts{
    total_dois:number,
    current_dois: number,
    backfile_dois: number
}

export interface JournalsMessageMessageItemsBreakdowns{
    dois_by_issued_year: [
        [
            number
        ]
    ]
}

export interface CoverageFull{
    affiliations_current: number
    similarity_checking_current: number
    descriptions_current: number
    ror_ids_current: number
    references_backfie: number
    funders_backfile: number
    licenses_backfile: number
    funders_current: number
    affiliations_backfile: number
    resource_links_backfile: number
    orcids_backfile: number
    update_policies_current: number
    ror_ids_backfile: number
    orcids_current:	number
    similarity_checking_backfile:number
    descriptions_backfile: number
    award_numbers_backfile:	number
    update_policies_backfile: number
    licenses_current: number
    award_numbers_current: number
    abstracts_backfile:	number
    resource_links_current:	number
    abstracts_current:	number
    references_current:	number
}