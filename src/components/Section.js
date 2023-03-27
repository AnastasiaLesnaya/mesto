class Section {
  constructor({ renderer }, templateSelector) {
    this._renderer = renderer;
    this._templateContainer = document
    .querySelector(templateSelector);
  }

// метод отрисовки карточек
  renderItems() {
    res.forEach(this._renderer);
    }

// метод добавляет DOM-элемент в разметку
addItem(cardElement) {
  this._templateContainer.prepend(cardElement);
}
}

export { Section };