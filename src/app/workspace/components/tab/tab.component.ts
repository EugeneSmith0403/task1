import {Component, Input, OnInit} from '@angular/core';

/**
 * Компонет для отображения таба
 */

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass']
})
export class TabComponent implements OnInit {
  constructor() { }
  /** Опция активности таба */
  @Input()
  public active: boolean | undefined;
  public ngOnInit(): void {}
}
