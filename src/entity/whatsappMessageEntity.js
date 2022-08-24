const MessageInterface = require("./interface/messageInterface");

class WhatsappMessageEntity extends MessageInterface {
    constructor() {
        super();
    }

    find(_id) {
        return _id
    }

    sendMessage({ from, to, message }) {
        return `Hey ${to}!! ${from} send a whatsapp: ${message}`;
    }
}
module.exports = WhatsappMessageEntity;