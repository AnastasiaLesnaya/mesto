// показываем ошибки валидации форм
const showInputError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  // передаём текст ошибки
  errorElement.textContent = errorMessage;
  // показываем текст ошибки
  errorElement.classList.add(obj.errorClass);
};

// скрываем ошибки валидации
const hideInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
   // скрываем текст ошибок
   errorElement.classList.remove(obj.errorClass);
  // очищаем ошибки
  errorElement.textContent = '';
}; 

// проверяем валидацию форм
const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    hideInputError(formElement, inputElement, obj);
  }
};

// проверяем поля ввода
const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, obj);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, obj);
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
};

// проверяем поля ввода на ошибки
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// кнопка submit вкл/выкл
const toggleButtonState = (inputList, buttonElement, obj) => {
  if (hasInvalidInput(inputList)) {
    // выключаем кнопку при ошибке валидации
    buttonElement.classList.add(obj.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    // включаем кнопку
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

// запускаем валидацию
const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
  });
    setEventListeners(formElement, obj);
  });
};

enableValidation({
  // форма, поля ввода и кнопка сохраанения
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  // классы для кнопок и ошибок
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_type_visible',
 });