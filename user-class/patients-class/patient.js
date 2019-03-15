const User = require("../user");
const dataManager = require("../../data-manager/data-manager");

class Patient extends User {
  constructor(userCategory, name, email, password) {
    super(userCategory, name, email, password);
  }

  bookDoctorsAppointment(dateTime, doctor) {
    dataManager.bookDoctorsAppointment(dateTime, doctor, this.email);
  }
  cancelDoctorsAppointment(dateTime, doctor) {
    dataManager.cancelDoctorsAppointment(dateTime, doctor, this.email);
  }

  viewAppointments() {
    dataManager.viewAppointments(this.email);
  }
}

module.exports = Patient;
