import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import {MatFormFieldModule} from '@angular/material/form-field';
import { ComponentsModule } from "../components/components.module";
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MaterialModule } from '../material/material.module';
@NgModule({
    declarations: [
        HeaderComponent,
        SidenavComponent,
        FooterComponent
                 ],

    exports: [HeaderComponent,
        SidenavComponent, FooterComponent],
    imports: [
        CommonModule,
      
        ComponentsModule,
        RouterModule,
        MaterialModule

    ]
})
export class LayoutModule { }
