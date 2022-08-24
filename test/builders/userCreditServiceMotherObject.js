const UserCreditServiceBuilder = require("./userCreditServiceBuilder");

class UserCreditServiceMotherObject {
  static valid() {
    return UserCreditServiceBuilder.aUserCredit().build();
  }

  static withInvalidId() {
    return UserCreditServiceBuilder.aUserCredit().withInvalidId().build();
  }

  static withInvalidCreditType() {
    return UserCreditServiceBuilder.aUserCredit().withInvalidCreditType().build();
  }

  static withNullCreditType() {
    return UserCreditServiceBuilder.aUserCredit().withNullCreditType().build();
  }

  static withNoCredits() {
    return UserCreditServiceBuilder.aUserCredit().withNoCredits().build();
  }
}

module.exports = UserCreditServiceMotherObject;
