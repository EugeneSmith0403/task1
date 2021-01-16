import { Component, OnInit } from '@angular/core';

/**
 * Компонент для отобрадения контента таба
 */

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.sass']
})
export class TabContentComponent implements OnInit {
  constructor() { }
  public ngOnInit(): void {}
}
