class MessageRepository {
    constructor({ dbConnection }) {
        this.dbConnection = dbConnection
    }

    async find(query) {
        return this.dbConnection.find(query)
    }

    async sendMessage(query) {
        return this.dbConnection.sendMessage(query)
    }
}

module.exports = MessageRepository