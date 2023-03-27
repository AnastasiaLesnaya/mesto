class Api {
  constructor({ link, headers }) {
    this._link = link;
    this._headers = headers;
  }
  // скрытый метод обработки ответа сервера
  _processingServerResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Код ошибки: ${res.status}`);
    }
  }
  // публичный метод загрузки карточек с сервера
  getInitialCards() {
    return fetch(`${this._link}cards`, {
      headers: this._headers
    })
      .then(res => { return this._processingServerResponse(res); })
  }
  // публичный метод отправки новой карточки на сервер
  addNewCard({ name, link }) {
    return fetch(`${this._link}cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, link })
    })
      .then(res => { return this._processingServerResponse(res); })
  }
  // публичный метод удаления карточки с сервера
  deleteCard(cardId) {
    return fetch(`${this._link}cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res => { return this._processingServerResponse(res); })
  }
  // публичный метод получения пользовательских данных с сервера
  getUserData() {
    return fetch(`${this._link}users/me`, {
      headers: this._headers
    })
      .then(res => { return this._processingServerResponse(res); })
  }
  // публичный метод отправки данных профиля на сервер
  sendUserData(profileData) {
    return fetch(`${this._link}users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ name: profileData.name, about: profileData.job })
    })
      .then(res => { return this._processingServerResponse(res); })
  }
  // публичный метод отправки нового аватара на сервер
  sendAvatarData(avatarLink) {
    return fetch(`${this._link}users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: avatarLink.avatar })
    })
      .then(res => { return this._processingServerResponse(res); })
  }
  // публичный метод отправки лайка на сервер
  putCardLike(cardId) {
    return fetch(`${this._link}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT',
    })
      .then(res => { return this._processingServerResponse(res); })
  }
  // публичный метод удаления лайка с сервера
  deleteCardLike(cardId) {
    return fetch(`${this._link}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res => { return this._processingServerResponse(res); })
  }
}
export { Api };