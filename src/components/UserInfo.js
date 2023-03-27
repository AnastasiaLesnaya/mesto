class UserInfo {
  constructor({ usernameSelector, userJobSelector }) {
    this._username = document.querySelector(usernameSelector);
    this._userJob = document.querySelector(userJobSelector);
    this._avatarLink = document.querySelector('.profile__avatar');
  }

  // метод возвращения объекта с данными пользователя
  // этот метод пригодится, когда данные пользователя 
  // нужно будет подставить в форму при открытии
  getUserInfo() {
    return {
      name: this._username.textContent,
      job: this._userJob.textContent
    };
  }

  // метод принимает новые данные пользователя 
  // и добавляет их на страницу
  setUserInfo({ name, job }) {
    this._username.textContent = name;
    this._userJob.textContent = job;
  }
// метод изменения аватара пользователя
setUserAvatar(avatarLink) {
  this._avatarLink.src = avatarLink;
}
}

export { UserInfo };