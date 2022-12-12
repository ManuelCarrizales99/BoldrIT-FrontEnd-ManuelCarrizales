import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponseWork } from 'src/app/models/apiResponse.model';
import { Works } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';
@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent {


  apiResponse: ApiResponseWork | null = null;
  @Input() work: Works = {
    institution: {
      name: '',
      place: [],
      department: [],
      acronym: [],
    },
    indexed: {
      date_parts:	[[0]],
      date_time:	'',
      timestamp:	0,
    },
    posted:	{
      date_parts:	[[0]],
    },
    publisher_location:'',
    update_to: [{
      label: '',
      DOI: '',
      type: '',
      updated: {
        date_parts:	[[0]],
        date_time:	'',
        timestamp:	0,
      }
    }],
    standards_body: [{
      name:'',
      acronym: []
    }],
    edition_number:'',
    group_title:[],
    reference_count: 0,
    publisher:'',
    issue:'',
    isbn_type: [{
      type: '',
      value: []
    }],
    license:[{
      URL: '',
      start: {
        date_parts:	[[0]],
        date_time:	'',
        timestamp:	0,
      },
      delay_in_days: 0,
      content_version: ''
    }],
    funder: [{
      name: '',
      DOI: '',
      doi_asserted_by: '',
      award:[]
   }],
    content_domain:	{
      domain: [],
      crossmark_restriction: false
    },
    chair: [{
      ORCID: '',
      suffix: '',
      given: '',
      family: '',
      affiliation: [{
        name: ''
      }],
      name: '',
      authenticated_orcid: false,
      prefix: '',
      sequence: '',
     }],
    short_container_title:'',
    accepted: {
      date_parts:	[[0]],
    },
    content_updated: {
      date_parts:	[[0]],
    },
    published_print: {
      date_parts:	[[0]],
    },
    abstract:'',
    DOI:'',
    type:'',
    created: {
      date_parts:	[[0]],
      date_time:	'',
      timestamp:	0,
    },
    approved: {
      date_parts:	[[0]],
    },
    page:'',
    update_policy:'',
    source:'',
    is_referenced_by_count: 0,
    title:[],
    prefix:'',
    volume:'',
    clinical_trial_number: [{
        clinical_trial_number: '',
        registry: '',
        type: ''
    }],
    author:	[{
        ORCID: '',
        suffix: '',
        given: '',
        family: '',
        affiliation: [{
            name: ''
        }],
        name: '',
        authenticated_orcid: false,
        prefix: '',
        sequence: '',
    }],
    member:'',
    content_created: {
      date_parts:	[[0]],
    },
    published_online: {
      date_parts:	[[0]],
    },
    reference: {
        issn: '',
        standards_body: '',
        issue: '',
        key: '',
        series_title: '',
        isbn_type: '',
        doi_asserted_by: '',
        first_page: '',
        isbn: '',
        doi: '',
        component: '',
        article_title: '',
        volume_title: '',
        volume: '',
        author: '',
        standard_designator: '',
        year: '',
        unstructured: '',
        edition: '',
        journal_title: '',
        issn_type: '',
    },
    container_title:[],
    review: {
        type: '',
        running_number: '',
        revision_round: '',
        stage: '',
        competing_interest_statement: '',
        recommendation: '',
        language: '',
    },
    original_title:[],
    language:'',
    link: [{
        URL: '',
        content_type: '',
        content_version: '',
        intended_application: '',
    }],
    deposited:	{
      date_parts:	[[0]],
      date_time:	'',
      timestamp:	0,
    },
    score: 0,
    degree:'',
    subtitle:[],
    translator: [{
        ORCID: '',
        suffix: '',
        given: '',
        family: '',
        affiliation: [{
            name: ''
        }],
        name: '',
        authenticated_orcid: false,
        prefix: '',
        sequence: '',
    }],
    free_to_read: {
        start_date: {
            date_parts:	[[0]],
        },
        end_date: {
            date_parts:	[[0]],
        },
    },
    editor: [{
        ORCID: '',
        suffix: '',
        given: '',
        family: '',
        affiliation: [{
            name: ''
        }],
        name: '',
        authenticated_orcid: false,
        prefix: '',
        sequence: '',
    }],
    component_number:'',
    short_title:[],
    issued: {
      date_parts:	[[0]],
    },
    ISBN:[],
    references_count: 0,
    part_number:'',
    journal_issue: {
        issue: '',
    },
    alternative_id:[],
    URL:'', 
    archive: [],
    relation: {
        worksMessageItemsRelationJava: {
            id_type: '',
            id: '',
            asserted_by: '',
        },
    },
    ISSN:[],
    issn_type: [{
        type: '',
        value: []
    }],
    subject:[],
    published_other: {
      date_parts:	[[0]],
    },
    published: {
      date_parts:	[[0]],
    },
    assertion: [],
    subtype:'',
    article_number:'',
  };

  constructor(private route: ActivatedRoute, private worksServices: WorksService){}

  ngOnInit(){
  }

}
