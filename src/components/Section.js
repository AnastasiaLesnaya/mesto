class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._container = document
    .querySelector(selector);
  }

  // метод добавляет DOM-элемент в разметку
  addItem(cardElement) {
  this._container.prepend(cardElement);
}

// метод отрисовки карточек
  renderItems(cardObject) {
    cardObject.forEach(this._renderer);
    }
}

export { Section };