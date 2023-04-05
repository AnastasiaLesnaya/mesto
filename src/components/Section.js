export class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._container = document
    .querySelector(selector);
  }


  addItem(res) {
    this._container.prepend(res);
  }

  // метод отрисовки карточек
  renderItems(data) {
    data.forEach((res) => {
      this._renderer(res);
    });
 }
}
