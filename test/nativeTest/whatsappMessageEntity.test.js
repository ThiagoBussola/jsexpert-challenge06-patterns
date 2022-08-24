const test = require('node:test')
const assert = require('node:assert')
const WhatsappMessageEntity = require("../../src/entity/whatsappMessageEntity");
const validWhatsappMessage = require("../mocks/validWhatsappMessageEntity.json");

test('Whatsapp Entity Test', async (t) => {
    await t.test('should return a message with receiver, sender and the message', (t) => {
        const whatsappMessageEntity = new WhatsappMessageEntity()
        const message = whatsappMessageEntity.sendMessage(validWhatsappMessage)

        const expected = "Hey Stefani!! Thiago Bussola send a whatsapp: whatsapp maroto!";
        assert.strictEqual(message, expected)
    })
})