import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupZoomTitle = document.querySelector('.popup__title_zoom');
    this._popupZoomImage = document.querySelector('.popup__image');
  }

// открываем попап зум с необходимыми данными
  open(zoomTitle, zoomImage) {
    this._popupZoomTitle.textContent = zoomTitle;
    this.__popupZoomImage.alt = zoomTitle;
    this.__popupZoomImage.src = zoomImage;
    super.open();
  }
}

export { PopupWithImage };