const MessageNotImplementedException = require("../../exceptions/messageNotImplementedExceptions");

class MessageInterface {

    find(_id) {
        throw new MessageNotImplementedException(this.render.name)
    }

    sendMessage({ from, to, message }) {
        throw new MessageNotImplementedException(this.render.name)
    }
}

module.exports = MessageInterface;