export interface Works{
    institution: WorkInstitution,
    indexed: Date,
    posted:	DateParts,
    publisher_location:	string,
    update_to: WorkUpdate[],
    standards_body: WorkStandardsBody[],
    edition_number: string,
    group_title: string[],
    reference_count: number,
    publisher:	string,
    issue: string,
    isbn_type: WorkISSNType[],
    license: WorkLicense[],
    funder: WorkFunder[],
    content_domain:	WorkDomain,
    chair: Author[],
    short_container_title:	string,
    accepted: DateParts,
    content_updated: DateParts,
    published_print: DateParts,
    abstract:	string,
    DOI: string,
    type: string,
    created: Date,
    approved: DateParts,
    page: string,
    update_policy: string,
    source: string,
    is_referenced_by_count: number,
    title:	string[],
    prefix: string,
    volume:	string,
    clinical_trial_number: WorkClinicalTrial[],
    author:	Author[],
    member: string,
    content_created: DateParts,
    published_online: DateParts,
    reference: Reference,
    container_title: string[],
    review: WorkReview,
    original_title: string[],
    language: string,
    link: WorkLink[],
    deposited:	Date,
    score: number,
    degree:	string,
    subtitle: string[],
    translator: Author[],
    free_to_read: WorkFreeToRead,
    editor: Author[],
    component_number: string,
    short_title: string[],
    issued: DateParts,
    ISBN: string[],
    references_count: number,
    part_number: string,
    journal_issue: WorkJournalIssue,
    alternative_id: string[],
    URL: string, 
    archive: [],
    relation: WorkRelation,
    ISSN: string[],
    issn_type: WorkISSNType[],
    subject: string[],
    published_other: DateParts,
    published: DateParts,
    assertion: [],
    subtype: string,
    article_number:	string,
}

export interface WorksMessageMessageItemsAssertionExplanation{
    URL: string
}
export interface WorksMessageMessageItemsAssertionGroup{
    name: string,
    label: string
}

export interface WorkAssertion{
    group: WorksMessageMessageItemsAssertionGroup,
    explanation: WorksMessageMessageItemsAssertionExplanation,
    name: string,
    value: string,
    URL: string,
    order: number,
}

export interface WorksMessageMessageItemsRelationJava{
    id_type: string,
    id: string,
    asserted_by: string,
}
export interface WorkRelation{
    worksMessageItemsRelationJava: WorksMessageMessageItemsRelationJava,
}

export interface WorkJournalIssue{
    issue: string,
}

export interface WorkFreeToRead{
    start_date: DateParts,
    end_date: DateParts,
}

export interface WorkLink{
    URL: string,
    content_type: string,
    content_version: string,
    intended_application: string,
}

export interface WorkReview{
    type: string,
    running_number: string,
    revision_round: string,
    stage: string,
    competing_interest_statement: string,
    recommendation: string,
    language: string,
}

export interface Reference{
    issn: string,
    standards_body: string,
    issue: string,
    key: string,
    series_title: string,
    isbn_type: string,
    doi_asserted_by: string,
    first_page: string,
    isbn: string,
    doi: string,
    component: string,
    article_title: string,
    volume_title: string,
    volume: string,
    author: string,
    standard_designator: string,
    year: string,
    unstructured: string,
    edition: string,
    journal_title: string,
    issn_type: string,
}
export interface WorkClinicalTrial{
    clinical_trial_number: string
    registry: string
    type: string
}

export interface Affiliation{
    name: string
}

export interface Author{
    ORCID: string,
    suffix: string,
    given: string,
    family: string,
    affiliation: Affiliation[],
    name: string,
    authenticated_orcid: boolean,
    prefix: string,
    sequence: string,
}

export interface WorkDomain{
    domain: string[],
    crossmark_restriction: boolean
}
export interface WorkFunder{
    name: string,
    DOI: string,
    doi_asserted_by: string,
    award:	string[]
}

export interface WorkLicense{
    URL: string,
    start: Date,
    delay_in_days: number,
    content_version: string
}
export interface WorkISSNType{
    type: string
    value: string[]
}

export interface WorkStandardsBody{
    name:string,
    acronym: string[]
}
export interface WorkUpdate{
    label: string,
    DOI: string,
    type: string,
    updated: Date
}
export interface WorkInstitution{
    name: string,
    place: string[],
    department: string[],
    acronym: string[],
}

export interface Date{
    date_parts:	[[number]],
    date_time:	string,
    timestamp:	number,
}

export interface DateParts{
    date_parts:	[[number]],
}