import { Component } from '@angular/core';
import { JournalsService } from 'src/app/services/journals.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  constructor(private journalsService: JournalsService){}

  ngOnInit(){
    this.getJournals();
  }

  getJournals(){
    this.journalsService.getAllFunders().subscribe(data =>{
      console.log(data);
    });
  }
}
