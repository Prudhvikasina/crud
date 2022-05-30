import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
// import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeService } from './employee.service';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ImagesComponent } from './images/images.component';
import { GraphsComponent } from './graphs/graphs.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { NgChartsModule } from 'ng2-charts';
import { SortComponent } from './sort/sort.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { Ng2OrderModule} from 'ng2-order-pipe';
import { NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FilterpipesComponent } from './filterpipes/filterpipes.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { CellComponent } from './cell/cell.component';
import { CustomizedCellComponent } from './customized-cell/customized-cell.component';
import { ScrollComponent } from './scroll/scroll.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { InlineComponent } from './inline/inline.component';
import { AgngularGridComponent } from './agngular-grid/agngular-grid.component';
import { MedalCellRendererComponent } from './medal-cell-renderer/medal-cell-renderer.component';
import { TotalValueRendererComponent } from './total-value-renderer/total-value-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent,
    UserComponent,
    UsersComponent,
    YoutubeComponent,
    ImagesComponent,
    GraphsComponent,

    SortComponent,
    FilterpipesComponent,
    FilterPipe,
    CellComponent,
    CustomizedCellComponent,
    ScrollComponent,
    InlineComponent,
    AgngularGridComponent,
    MedalCellRendererComponent,
    TotalValueRendererComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    NgChartsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    CalendarModule,
    SliderModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    PlotlyModule,
    OAuthModule.forRoot(),
    AgGridModule.withComponents([AppComponent,MedalCellRendererComponent,TotalValueRendererComponent]),
    FilterPipeModule,
    InfiniteScrollModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
