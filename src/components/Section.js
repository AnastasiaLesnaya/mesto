class Section {
  constructor({ items, renderer }, templateEl) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._templateContainer = document.querySelector(templateEl);
  }

// метод отрисовки карточек
  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }

// метод добавляет DOM-элемент в разметку
  addItem(cardElement) {
    this._templateContainer.prepend(cardElement);
  }
}

export { Section };