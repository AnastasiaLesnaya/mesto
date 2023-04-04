export class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._container = document
    .querySelector(selector);
  }

  // метод отрисовки карточек
  renderItems(res) {
    res.forEach(this._renderer);
    }

  // метод добавляет DOM-элемент в разметку
  addItem(res) {
  this._container.prepend(res);
}
}
