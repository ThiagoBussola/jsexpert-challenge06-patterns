const UserCreditFactory = require("../factory/userCreditFactory");
const MessageFactory = require("../factory/messageFactory");

class MessageFacade {
    constructor(messageType) {
        this.messageType = messageType;
        this.userCreditService = UserCreditFactory.generateInstance();
        this.messageService = MessageFactory.generateInstance({
            type: this.messageType,
        });
    }

    async sendMessage({ _id, from, to, message }) {
        return await this._tryToSendMessage({
            _id,
            from,
            to,
            message,
        });
    }

    async find(_id) {
        return 'ola amigos'
    }

    async _tryToSendMessage({ _id, from, to, message }) {
        const resultdecreaseOneCreditUserCreditBalance =
            await this.userCreditService.decreaseOneCreditUserCreditBalance({
                _id,
                typeOfCredit: this.messageType,
            });
        if (isNaN(resultdecreaseOneCreditUserCreditBalance)) {
            return resultdecreaseOneCreditUserCreditBalance;
        }
        const resultMessageFactory = this.messageService.sendMessage({
            from,
            to,
            message,
        });
        return resultMessageFactory;
    }
}

module.exports = MessageFacade;