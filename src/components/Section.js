class Section {
  constructor({ items, renderer }, templateSelector) {
    this._initialItems = items;
    this._renderer = renderer;
    this._templateContainer = document.querySelector(templateSelector);
  }

// метод отрисовки карточек
  renderItems() {
    this._initialItems.forEach(this._renderer);
    }

// метод добавляет DOM-элемент в разметку
addItem(cardElement) {
  this._templateContainer.prepend(cardElement);
}
}

export { Section };