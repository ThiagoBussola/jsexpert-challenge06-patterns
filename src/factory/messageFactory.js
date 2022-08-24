const EmailMessageEntity = require("../entity/emailMessageEntity");
const SMSMessageEntity = require("../entity/smsMessageEntity");
const WhatsappMessageEntity = require("../entity/whatsappMessageEntity");
const MessageService = require("../service/messageService");

class MessageFactory {
    static createInstance(type) {
        const messageType = {
            email: function () {
                const messageEntity = new EmailMessageEntity();
                const messageService = new MessageService(messageEntity);
                return messageService;
            },
            sms: function () {
                const messageEntity = new SMSMessageEntity();
                const messageService = new MessageService(messageEntity);
                return messageService;
            },
            whatsapp: function () {
                const messageEntity = new WhatsappMessageEntity();
                const messageService = new MessageService(messageEntity);
                return messageService;
            }
        }

        return messageType[type]()

        // invoke it
    }
}
module.exports = MessageFactory;