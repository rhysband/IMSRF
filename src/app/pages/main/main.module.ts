import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialFileInputModule } from 'ngx-material-file-input';

// Main Components
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { InventoryComponent, ViewBatchComponent } from '../../components/inventory/inventory.component'
import { EventsComponent, InitEventComponent, UpdatePreEventComponent , UpdatePostEventComponent, ViewEventComponent } from '../../components/events/events.component'
import { PartnersComponent, AddPartnerComponent, ViewPartnerComponent } from '../../components/partners/partners.component';
import { DonorsComponent, AddDonorComponent, ViewDonorComponent } from '../../components/donors/donors.component';
import { DispatchComponent, AddRequestComponent, ViewRequestComponent, AddOrderComponent , ViewOrderComponent } from '../../components/dispatch/dispatch.component';
import { AccountsComponent, AddUserComponent, ViewUserComponent } from '../../components/accounts/accounts.component';
import { ReportsComponent } from '../../components/reports/reports.component';
import { SummaryComponent } from '../../components/summary/summary.component';
import { RequesterComponent } from '../../components/requester/requester.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
     path: 'dashboard',
     component: DashboardComponent,
  },
  {
     path: 'inventory',
     component: InventoryComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'partners',
    component: PartnersComponent,
  },
  {
    path: 'partners/summary',
    component: SummaryComponent,
  },
  {
    path: 'donors',
    component: DonorsComponent,
  },
  {
    path: 'requester',
    component: RequesterComponent,
  },
  {
    path: 'dispatch',
    component: DispatchComponent,
  },
  {
    path: 'accounts',
    component: AccountsComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  }
]

@NgModule({
  declarations: [
    // Components
    DashboardComponent,
    InventoryComponent,
    EventsComponent,
    PartnersComponent,
    DonorsComponent,
    DispatchComponent,
    AccountsComponent,
    ReportsComponent,
    SummaryComponent,

    // Dialogs
    AddPartnerComponent,
    ViewPartnerComponent,
    AddUserComponent,
    ViewUserComponent,
    InitEventComponent,
    UpdatePreEventComponent ,
    UpdatePostEventComponent,
    ViewEventComponent,
    ViewBatchComponent,
    AddRequestComponent,
    ViewRequestComponent,
    AddOrderComponent,
    ViewOrderComponent,
    AddDonorComponent,
    ViewDonorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,

    MaterialFileInputModule,
    MatFormFieldModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class MainModule { }
