import { Component } from '@angular/core';
import { Works } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  works: Works[] = [];
  constructor(private worksService: WorksService){}

  ngOnInit(){
    this.getWorks
  }
  getWorks(){
    this.worksService.getAllWorks().subscribe( data =>{
      this.works = data.message.items
    })
  }

}
