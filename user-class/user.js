class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  updateRecord(password, update) {
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
