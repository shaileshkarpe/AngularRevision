import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PreBuiltAppsComponent } from './pre-built-apps/pre-built-apps.component';
import { FormsComponent } from './forms/forms.component';
import { ExtraComponentsComponent } from './extra-components/extra-components.component';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { PagesComponent } from './pages/pages.component';
import { ExtraViewsComponent } from './extra-views/extra-views.component';
import { EditorsComponent } from './extra-components/editors/editors.component';
import { PickersComponent } from './extra-components/pickers/pickers.component';
import { NotificationComponent } from './extra-components/notification/notification.component';
import { ChartsComponent } from './data-visualization/charts/charts.component';
import { MapsComponent } from './data-visualization/maps/maps.component';
import { GridComponent } from './extra-views/grid/grid.component';
import { ListComponent } from './extra-views/list/list.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { LayoutsComponent } from './main/layouts/layouts.component';
import { MetricsComponent } from './main/metrics/metrics.component';
import { WidgetsComponent } from './main/widgets/widgets.component';
import { BasicFormComponent } from './forms/basic-form/basic-form.component';
import { FileUploadComponent } from './forms/forms/file-upload/file-upload.component';
import { ContactAppComponent } from './pre-built-apps/contact-app/contact-app.component';
import { MailAppComponent } from './pre-built-apps/mail-app/mail-app.component';
import { TaskManagerComponent } from './pre-built-apps/task-manager/task-manager.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    MainComponent,
    PreBuiltAppsComponent,
    FormsComponent,
    ExtraComponentsComponent,
    DataVisualizationComponent,
    PagesComponent,
    ExtraViewsComponent,
    EditorsComponent,
    PickersComponent,
    NotificationComponent,
    ChartsComponent,
    MapsComponent,
    GridComponent,
    ListComponent,
    DashboardComponent,
    WidgetsComponent,
    MetricsComponent,
    LayoutsComponent,
    BasicFormComponent,
    FileUploadComponent,
    TaskManagerComponent,
    MailAppComponent,
    ContactAppComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    MainComponent,
    PreBuiltAppsComponent,
    FormsComponent,
    ExtraComponentsComponent,
    DataVisualizationComponent,
    PagesComponent,
    ExtraViewsComponent,
  ],
})
export class ComponentsModule {}
