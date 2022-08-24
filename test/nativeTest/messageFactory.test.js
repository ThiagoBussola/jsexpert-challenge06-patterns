const test = require('node:test')
const assert = require('node:assert')
const MessageFactory = require("../../src/factory/messageFactory");
const EmailMessageEntity = require("../../src/entity/emailMessageEntity");
const SmsMessageEntity = require("../../src/entity/smsMessageEntity");
const WhatsappMessageEntity = require("../../src/entity/whatsappMessageEntity");
const { EMAIL, SMS, WHATSAPP } = require('../../src/util/creditTypeEnum')

test("Message Factory Test", async (t) => {
    await t.test("Should return Message Service With Email Entity if the type of credit is email", async () => {
        const messageService = await MessageFactory.createInstance(EMAIL);


        const entityMessage = await messageService.entityMessage;

        assert.ok(entityMessage instanceof EmailMessageEntity)
    })
    await t.test("Should return Message Service With Sms Entity if the type of credit is sms", async () => {
        const messageService = await MessageFactory.createInstance(SMS);


        const entityMessage = await messageService.entityMessage;

        assert.ok(entityMessage instanceof SmsMessageEntity)
    });
    await t.test("Should return Message Service With Sms Entity if the type of credit is sms", async () => {
        const messageService = await MessageFactory.createInstance(WHATSAPP);


        const entityMessage = await messageService.entityMessage;

        assert.ok(entityMessage instanceof WhatsappMessageEntity)
    });
});
