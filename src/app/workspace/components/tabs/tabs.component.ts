import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

/**
 *  Компонент для отображения списка табов
 */
@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> | undefined;
  constructor() { }
  public ngOnInit(): void {}
}
