const test = require('node:test')
const assert = require('node:assert')
const EmailMessageEntity = require("../../src/entity/emailMessageEntity");
const validEmailMessage = require("../mocks/validEmailMessageEntity.json");

test('Email Entity Test', async (t) => {
    await t.test('should return a message with receiver, sender and message', (t) => {
        const emailMessageEntity = new EmailMessageEntity()
        const message = emailMessageEntity.sendMessage(validEmailMessage)

        const expected = "Hey Welss!! Thiago Bussola send a email: email maroto!";
        assert.strictEqual(message, expected)
    })
})