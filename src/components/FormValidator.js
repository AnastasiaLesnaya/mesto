class FormValidator {
  constructor(objectList, elementValidation) {
    this._objectList = objectList;
    this._elementValidation = elementValidation;
   // поля ввода 
   this._inputList = Array.from(this._elementValidation.querySelectorAll(this._objectList.inputSelector));
   // кнопка в форме
   this._submitButton = this._elementValidation.querySelector(this._objectList.submitButtonSelector);
  }

  // показываем ошибки валидации
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._elementValidation.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(this._objectList.inputErrorClass);
    // передаём и отображаем текст ошибки
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._objectList.errorClass);
  }

  // скрываем ошибки валидации
  _hideInputError(inputElement) {
    const errorElement =
    this._elementValidation.querySelector(`.${inputElement.id}-error`)
    // скрываем и очищвем текст ошибок
    inputElement.classList.remove(this._objectList.inputErrorClass);
    errorElement.classList.remove(this._objectList.ErrorClass);
    errorElement.textContent = '';
  }

  // метод проверки валидации
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      // показываем ошибки
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // скрываем ошибки
      this._hideInputError(inputElement);
    }
  }

  // проверяем поля ввода
  _setEventListeners() {
    this._toggleButtonState();
  // проверяем массив
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
     });
  }

  // обход на ошибки
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // публичный метод, включающий валидацию
  enableValidation() {
    this._setEventListeners();
  }

  
  _disableSubmitButton() {
    this._submitButton.setAttribute('disabled', 'true');
    this._submitButton.classList.add(this._objectList.inactiveButtonClass);
  }

  _enableSubmitButton() {
    this._submitButton.classList.remove(this._objectList.inactiveButtonClass);
    this._submitButton.removeAttribute('disabled');
  }

  // вкл/выкл кнопки сохранения
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      // выкл при ошибке
      this._disableSubmitButton();
    } else {
      // вкл
      this._enableSubmitButton();
    }
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    })
    this._toggleButtonState();
  }
}

// Экспортируем класс валидации в файл index.js
export { FormValidator };