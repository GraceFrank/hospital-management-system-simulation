class User {
  constructor(userCategory, name, email, password) {
    this.userCategory = userCategory;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  updatePersonalDetails(password, update) {
    if (this.password === password) {
      for (const key in update) {
        this[key] = update[key];
      }
    }
  }
  viewPersonalDetails() {
    return { name: this.name, email: this.email, password: this.password };
  }
}

module.exports = User;
