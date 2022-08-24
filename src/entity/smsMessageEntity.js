const MessageInterface = require("./interface/messageInterface");

class SmsMessageEntity extends MessageInterface {
    constructor() {
        super();
    }

    find(_id) {
        return _id
    }

    sendMessage({ from, to, message }) {
        return `Hey ${to}!! ${from} send a sms: ${message}`;
    }
}
module.exports = SmsMessageEntity;