const MessageInterface = require("./interface/messageInterface");

class EmailMessageEntity extends MessageInterface {
    constructor() {
        super();
    }

    find(_id) {
        return _id
    }

    sendMessage({ from, to, message }) {
        return `Hey ${to}!! ${from} send a email: ${message}`;
    }
}
module.exports = EmailMessageEntity;