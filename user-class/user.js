class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  updateRecord(update) {
    for (const key in update) {
      this[key] = update[key];
    }
  }
  viewPersonalRecord() {
    return Object.toString(this);
  }
}

module.exports = User;
