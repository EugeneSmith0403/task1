import { ITab } from '../interfaces/tab';

/**
 * Класс который описывает модель таба
 */
export class TabModel {
  public index?: number;
  public active: boolean;
  public title: string;
  public content: any;
  constructor(props: ITab) {
    Object.keys(props).forEach((key) => {
      this[key] = props[key];
    });
  }
}
