import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, deleteCardApi) {
    super(popupSelector);

    this._deleteCardApi = deleteCardApi;

    this._popupFormItem = this._popupItem
    .querySelector('.popup__form');
  }

setData(data, deleteCard) {
  this._data = data;
  this._deleteCard = deleteCard;
}

getData(data, deleteCard) {
  this._data = data;
  this.deleteCard = deleteCard;
  super.open();
}
// вешаем обработчики на кнопку сохранения
setEventListeners() {
  super.setEventListeners();
  this._popupFormItem.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._deleteCardApi();
  });
 }
}