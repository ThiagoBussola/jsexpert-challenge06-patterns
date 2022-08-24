const ApplicationError = require("../util/errors/ApplicationError")
const locals = require('../util/locals/messages/en.local')
const status = require('../util/status/applicationStatus')

class MessageNotImplementedException {
    constructor() {
        this.name = 'MessageNotImplementedException'
        throw new ApplicationError(
            context = this.name,
            message = locals.default.METHOD_NOT_IMPLEMENTED,
            errorCode = status.default.INTERNAL_ERROR,
            stack = this.stack
        )
    }
}
module.exports = MessageNotImplementedException