import { Component } from '@angular/core';
import { ApiResponse } from 'src/app/models/apiResponse.model';
import { Works } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data: Works[] = [];
  apiResponse: ApiResponse | null = null; 
  constructor(private WorksService: WorksService){}

  ngOnInit(){
    this.getWorks();
  }
  getWorks(){
    this.WorksService.getAllWorks().subscribe(data =>{
      this.apiResponse = data;
      this.data = this.apiResponse.message.items;
      // console.log(this.data);
    });
  }
}
