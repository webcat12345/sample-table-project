import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";

import { DemoComponent }   from './demo.component';
import { DataFilterPipe }   from './data-filter.pipe';
import { ModalModule } from 'ng2-bootstrap';

@NgModule({
  imports:      [ 
    CommonModule, 
    DataTableModule, 
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  declarations: [ DemoComponent, DataFilterPipe ],
  exports: [DemoComponent]
})

export class DemoModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/