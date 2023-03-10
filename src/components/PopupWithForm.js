import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, { callbackFormSubmit }) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;
  
    this._popupFormItem = this._popupItem.querySelector('.popup__form');
  }

  // приватный метод, собирает данные всех полей формы
  _getInputValues() {
    this._inputList = Array.from(this._popupFormItem.querySelectorAll('.popup__input'));
     // заполняем данными
     this._formValues = {};
     this._inputList.forEach(inputItem => {
       this._formValues[inputItem.name] = inputItem.value;
     });
     return this._formValues;
   }

   // добавляем обработчик клика и нажатия кнопки
  setEventListeners() {
    super.setEventListeners();
    this._popupFormItem.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbackFormSubmit(this._getInputValues());
    });
  }

  // метод закрытия попапа
  close() {
    super.close();
    // очистить форму
    this._popupFormItem.reset();
  }
}

export { PopupWithForm };