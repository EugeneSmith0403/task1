import { Component, OnInit } from '@angular/core';

/**
 *  Компонент для отображения заголовка таба
 */
@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.sass']
})
export class TabTitleComponent implements OnInit {
  constructor() { }
  public ngOnInit(): void {}
}
