export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getAllCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Код ошибки: ${res.status}`);
      });
    }
    
    // публичный метод отправки новой карточки на сервер
  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => { 
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Код ошибки: ${res.status}`);
      });
  }
  
  // публичный метод удаления карточки с сервера
  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    }).then(res => { 
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Код ошибки: ${res.status}`);
      });
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
      body: JSON.stringify({ name: profileData.name, about: profileData.about
     })
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