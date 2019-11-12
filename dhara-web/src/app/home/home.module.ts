import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home.component';
//import { NotificationComponent } from './notification/notification.component';
//import { NgbdModalComponent } from './modal/modal.component';
//import { NgbdModalContent } from './modal/modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        HomeComponent
        /*
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent */
    ],
   // entryComponents: [NgbdModalContent],
    exports:[ HomeComponent ]
})
export class HomeModule { }
