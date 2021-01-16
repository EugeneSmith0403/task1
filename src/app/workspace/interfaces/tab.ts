/**
 * Интерфес который описывает таб
 */
export interface ITab {
  /** Индекс */
  index?: number;
  /** Активность */
  active: boolean;
  /** Заголовок */
  title: string;
  /** Контент */
  content: any;
}
