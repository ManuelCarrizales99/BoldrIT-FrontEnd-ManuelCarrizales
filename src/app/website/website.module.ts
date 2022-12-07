import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ListComponent } from './components/list/list.component';
import { SwiperTopArticleComponent } from './components/swiper-top-article/swiper-top-article.component';
import { SwiperModule } from 'swiper/angular';
import { LayoutComponent } from './components/layout/layout.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { DataTableComponent } from './components/data-table/data-table.component';
import { WorksComponent } from './components/works/works.component';
import { WorkComponent } from './components/work/work.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    ListComponent,
    SwiperTopArticleComponent,
    LayoutComponent,
    DataTableComponent,
    WorksComponent,
    WorkComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class WebsiteModule { }
