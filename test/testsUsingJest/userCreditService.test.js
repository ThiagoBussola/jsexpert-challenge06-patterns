const sinon = require("sinon");
const { join } = require("path");
const UserCreditServiceMotherObject = require("../builders/userCreditServiceMotherObject");

const { describe, test, expect, beforeEach, afterEach } = require('@jest/globals')


const UserCreditService = require("./../../src/service/userCreditService");
const UserCreditRepository = require("./../../src/repository/userCreditRepository");
const mockDatabase = join(
  __dirname,
  "../mocks/",
  "mockDatabase.json"
);

describe("UserCreditService Test", () => {
  let userCreditRepository = {};
  let userCreditService = {};
  let sandbox = {};

  beforeEach(() => {
    userCreditRepository = new UserCreditRepository({ file: mockDatabase });
    userCreditService = new UserCreditService({ userCreditRepository });
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  test("Should call UserCreditRepository create method", async () => {
    const validUserCredit = UserCreditServiceMotherObject.valid();
    sandbox
      .stub(
        userCreditService.userCreditRepository,
        userCreditService.userCreditRepository.create.name
      )
      .resolves(validUserCredit);
    await userCreditService.create(validUserCredit);
    expect(userCreditService.userCreditRepository.create.calledOnce).toStrictEqual(true)
  });
  test("Should call UserCreditRepository update method", async () => {
    const validUserCredit = UserCreditServiceMotherObject.valid();
    sandbox
      .stub(
        userCreditService.userCreditRepository,
        userCreditService.userCreditRepository.update.name
      )
      .resolves(validUserCredit);
    await userCreditService.update(validUserCredit);
    expect(userCreditService.userCreditRepository.update.calledOnce).toStrictEqual(true)
  });
  test("Should call UserCreditRepository find method", async () => {
    const validUserCredit = UserCreditServiceMotherObject.valid();
    sandbox
      .stub(
        userCreditService.userCreditRepository,
        userCreditService.userCreditRepository.find.name
      )
      .resolves(validUserCredit);
    await userCreditService.find(validUserCredit);
    expect(userCreditService.userCreditRepository.find.calledOnce).toStrictEqual(true)
  });
  test.only("Should return a error message if user not exists", async () => {
    const invalidUserCredit = UserCreditServiceMotherObject.withInvalidId();
    const result = await userCreditService.getUserTotalCredit(invalidUserCredit);

    const expected = `User _id: ${invalidUserCredit._id} dont exists or credit is null`;
    expect(result).toStrictEqual(expected);
  });
});
