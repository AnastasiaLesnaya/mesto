class Popup {
  constructor(popupSelector) {
    this._popupItem = document.querySelector(popupSelector);
  }

  // метод открытия попапа
  open() {
    this._popupItem.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose)
  };

  // метод закрытия попапа
  close () {
    this._popupItem.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

// метод закрытия попапов с помощью ESC
 _handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
    this.close();
  }
};

// метод закрытия попапов по оверлэю
setEventListeners() {
  this._popupItem.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      this.close();
    }
  });
}
}

export { Popup };