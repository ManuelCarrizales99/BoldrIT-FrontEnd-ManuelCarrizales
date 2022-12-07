import { AfterViewInit, Component, ViewChild, Input} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Works } from 'src/app/models/works.model';
import { WorksService } from 'src/app/services/works.service';
import { ApiResponse } from 'src/app/models/apiResponse.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {
  works: Works[] = [];
  apiResponse: ApiResponse | null = null; 

  displayedColumns: string[] = ['publisher', 'title', 'type', 'URL'];
  dataSource = new MatTableDataSource<Works>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private worksService: WorksService){
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(this.works);
  }

  ngOnInit(){
    this.getWorks();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  getWorks(){
    this.worksService.getAllWorks().subscribe(data =>{
      this.apiResponse = data;
      if(data.message.items.length > 0){
        this.works = this.apiResponse.message.items; 
      }
      this.refreshMaterial();
    });
  }

  refreshMaterial(){
    this.dataSource = new MatTableDataSource<Works>(this.works);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
