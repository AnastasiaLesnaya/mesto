import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupZoomTitle = document.querySelector('.popup__title_zoom');
    this._popupZoomImage = document.querySelector('.popup__image');
  }

// открываем попап зум с необходимыми данными
  open(place, picture) {
    this._popupZoomTitle.textContent = place;
    this._popupZoomImage.src = picture;
    this._popupZoomImage.alt = place;
    super.open();
  }
}

export { PopupWithImage };