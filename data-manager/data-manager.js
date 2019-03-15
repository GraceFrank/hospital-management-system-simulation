const doctors = require("../data/doctors-records");
const patients = require("../data/patient-records");
class DataManager {
  addNewUser(userCategory, userDetails) {
    userCategory[userDetails.email] = userDetails;
  }

  updateUserDetails(userCategory, userId, updateDetails) {
    userCategory[userId] = updateDetails;
  }
}

const dataManager = new DataManager();
module.exports = dataManager;
