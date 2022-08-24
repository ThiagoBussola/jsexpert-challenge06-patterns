class MessageService {
    constructor(entityMessage) {
        this.entityMessage = entityMessage
    }

    async find(_id) {
        return this.entityMessage.find(_id)
    }

    async sendMessage({ to, from, message }) {
        return this.entityMessage.sendMessage({ to, from, message })
    }
}

module.exports = MessageService