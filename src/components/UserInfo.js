class UserInfo {
  constructor({ usernameSelector, userJobSelector }) {
    this._username = document.querySelector(usernameSelector);
    this._userJob = document.querySelector(userJobSelector);
  }

  // метод возвращения объекта с данными пользователя
  // этот метод пригодится, когда данные пользователя 
  // нужно будет подставить в форму при открытии
  getUserInfo() {
    return {
      username: this._username.textContent,
      job: this._userJob.textContent
    };
  }

  // метод принимает новые данные пользователя 
  // и добавляет их на страницу
  setUserInfo({ username, job }) {
    this._username.textContent = username;
    this._userJob.textContent = job;
  }
}

export { UserInfo };