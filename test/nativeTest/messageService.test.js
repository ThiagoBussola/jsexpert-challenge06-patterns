const test = require('node:test')
const assert = require('node:assert')
const sinon = require("sinon");
const EmailMessageEntity = require("../../src/entity/emailMessageEntity");
const MessageService = require('../../src/service/messageService');
const validEmailMessage = require("../mocks/validEmailMessageEntity.json");

test("Message Service Test", async (t) => {
    await t.test("Should should call the sendMessage method", () => {
        const emailMessageEntity = new EmailMessageEntity();
        const messageService = new MessageService(emailMessageEntity);

        sinon.spy(emailMessageEntity, emailMessageEntity.sendMessage.name);

        messageService.sendMessage(validEmailMessage);

        assert.ok(emailMessageEntity.sendMessage.calledOnce)
    });
});