import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    
    this._popupZoomTitle = this._popupItem.querySelector('.popup__title_zoom');
    this._popupZoomImage = this._popupItem.querySelector('.popup__image');
  }

// открываем попап зум с необходимыми данными
  open(link, name) {
    this._popupZoomTitle.textContent = name;
    this._popupZoomImage.src = link;
    this._popupZoomImage.alt = name;
    super.open();
  }
}