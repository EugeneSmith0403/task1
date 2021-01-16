import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsControlComponent } from './components/tabs-control/tabs-control.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { TabTitleComponent } from './components/tab-title/tab-title.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { TestComponent } from './components/test/test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    TabsControlComponent,
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
    TestComponent
  ],
  exports: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
    TabsControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WorkspaceModule { }
