const test = require('node:test')
const assert = require('node:assert')
const SmsMessageEntity = require("../../src/entity/smsMessageEntity");
const validSmsMessage = require("../mocks/validSmsMessageEntity.json");

test('Sms Entity Test', async (t) => {
    await t.test('should return a message with receiver, sender and the message', (t) => {
        const smsMessageEntity = new SmsMessageEntity()
        const message = smsMessageEntity.sendMessage(validSmsMessage)

        const expected = "Hey Erick!! Thiago Bussola send a sms: sms maroto!";
        assert.strictEqual(message, expected)
    })
})