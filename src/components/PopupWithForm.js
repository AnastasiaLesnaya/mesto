import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, { callbackFormSubmit }) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;
  
    this._popupFormItem = this._popupItem.querySelector('.popup__form');
    this._inputList = Array.from(this._popupFormItem.querySelectorAll('.popup__input'));
    this._sendButton = this._popupItem.querySelector('.popup__submit');
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
    super.setEventListeners();
    this._popupFormItem.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbackFormSubmit(this._getInputValues());
    });
  }

    // метод добавления кнопке текста
    putSavingProcessText() {
      this._sendButton.textContent = 'Сохранение...';
    }
    // метод возвращения кнопки в привычный вид
    returnSavingProcessText() {
      this._sendButton.textContent = this._sendButtonText;
    }

  // метод закрытия попапа
  close() {
    super.close();
    // очистить форму
    this._popupFormItem.reset();
  }
}

export { PopupWithForm };