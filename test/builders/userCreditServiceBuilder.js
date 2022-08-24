const UserCredit = require("../../src/entity/userCreditiEntity");
const { EMAIL } = require("../../src/util/creditTypeEnum");

class UserCreditServiceBuilder {
  constructor() {
    this.userCreditData = {
      _id: 1,
      creditType: EMAIL,
      credit: 5,
    };
  }

  static aUserCredit() {
    return new UserCreditServiceBuilder();
  }

  withInvalidId() {
    this.userCreditData._id = 'asd4'

    return this
  }

  withInvalidCreditType() {
    this.userCreditData.creditType = 'mariposa surfista';

    return this;
  }

  withNullCreditType() {
    this.userCreditData.creditType = null;

    return this;
  }

  withNoCredits() {
    this.userCreditData.credit = -1;

    return this;
  }

  build() {
    const userCredit = new UserCredit(this.userCreditData);
    return userCredit;
  }
}

module.exports = UserCreditServiceBuilder;
