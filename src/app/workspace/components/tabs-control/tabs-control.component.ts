import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITab } from '../../interfaces/tab';
import { TabModel } from '../../classes/TabModel';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Subscription} from 'rxjs';

/**
 * Компонет, который управляет табами
 */

@Component({
  selector: 'tabs-control',
  templateUrl: './tabs-control.component.html',
  styleUrls: ['./tabs-control.component.sass']
})

export class TabsControlComponent implements OnInit, OnDestroy {
  constructor() {}
  /** табы */
  public tabs: TabModel[] = [];
  /** форма */
  public form: FormGroup;
  /** модель таба */
  public tabModel: TabModel = new TabModel({
    index: 0,
    content: null,
    title: null,
    active: false,
  });
  /** Ссылка на подписку формы */
  private formSub: Subscription;
  /** кнопка активности в форме добавления */
  public disabledButton = true;
  public ngOnInit(): void {
    this.tabsGenerator();
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
    this.formSub = this.form.valueChanges.subscribe(() => {
      this.disabledButton = !(this.form.controls.title.value && this.form.controls.content.value);
    });
  }

  /** Метод который предзаполняет свойство tabs
   * @return
   */
  private tabsGenerator(): void {
    for (let i = 0; i < 3; i++) {
      const model = new TabModel({
        index: i,
        active: i === 0,
        title: `tab-${i}`,
        content: `content-${i}`,
      });
      this.tabs.push(model);
    }
  }

  /** Обработчик добавления модели таба в общий список
   * @return
   */
  public addTabHandler(): void {
    if (this.form.valid) {
      const model = { ...this.tabModel };
      model.index = this.tabs.length + 1;
      this.tabs = [...this.tabs, model];
      this.form.reset();
    }
  }

  /** Обработчик клика по тайтлу таба
   * @return
   */
  public titleClickHandler($event: MouseEvent, tab: ITab): void {
    this.tabs.forEach((item) => {
      item.active = false;
    });
    const currentTab: ITab = this.tabs.find((item) => item.index === tab.index);
    currentTab.active = true;
  }

  /** Обработчик удаления таба по кресту
   * @return
   */
  public removeTabHandler(index: number): void {
    const firstTabIndex = this.tabs[0].index;
    this.tabs = this.tabs.filter((item) => item.index !== index);
    this.tabs[firstTabIndex].active = true;
  }

  public ngOnDestroy(): void {
    this.formSub.unsubscribe();
  }
}
