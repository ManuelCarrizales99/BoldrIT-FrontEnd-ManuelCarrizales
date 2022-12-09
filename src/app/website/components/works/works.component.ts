import { Component } from '@angular/core';
import { ApiResponse } from 'src/app/models/apiResponse.model';
import { Works } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  works: Works[] = [];
  apiResponse: ApiResponse | null = null; 
  constructor(private worksService: WorksService){}

  ngOnInit(){
    this.getWorks();
  }
  getWorks(){
    this.worksService.getAllWorks().subscribe(data =>{
      this.apiResponse = data;
      this.works = this.apiResponse.message.items;
      console.log(this.works);
    });
  }

}
