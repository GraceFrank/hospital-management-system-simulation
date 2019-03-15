const doctorsRecords = require("../data/doctors-records");
const patientsRecords = require("../data/patient-records");
class DataManager {
  getDateBase(string) {
    switch (string) {
      default:
        return patientsRecords;

      case "doctor":
        return doctorsRecords;
    }
  }

  addNewUser(userCategory, userDetails) {
    getDateBase(userCategory)[userDetails.email] = userDetails;
  }

  updateUserDetails(userCategory, userEmail, updateDetails) {
    getDateBase(userCategory)[userEmail] = updateDetails;
  }

  getUserDetails(userEmail, userCategory) {
    return getDateBase(userCategory)[userEmail];
  }
}

const dataManager = new DataManager();
module.exports = dataManager;
