import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackFormSubmit) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;
  
    this._popupFormItem = this._popupItem.querySelector('.popup__form');
    this._inputList = Array.from(this._popupFormItem.querySelectorAll('.popup__input'));
    this._sendButton = this._popupFormItem.querySelector('.popup__submit');
    this._sendButtonText = this._sendButton.textContent;
  }

// приватный метод, собирает данные всех полей формы
_getInputValues() {
// заполняем данными
  const formValues = {};
  this._inputList.forEach(inputItem => {
    formValues[inputItem.name] = inputItem.value;
   });
    return formValues;
}

// добавляем обработчик клика и нажатия кнопки
setEventListeners() {
  this._popupFormItem.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._callbackFormSubmit(this._getInputValues());
  });
  super.setEventListeners();
}

// метод добавления кнопке текста
showLoading(data) {
  if (data) {
    this._sendButton.textContent = "Сохранение...";
  } else {
    this._sendButton.textContent = this._sendButtonText;
  }
}

// метод закрытия попапа
close() {
  super.close();
// очистить форму
  this._popupFormItem.reset();
 }
}