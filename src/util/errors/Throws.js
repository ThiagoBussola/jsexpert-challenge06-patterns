const ApplicationError = require("./ApplicationError")

class Throw {
    static when(context, condition, message, errorCode) {
        if (condition) {
            throw new ApplicationError(context, message, errorCode);
        }
    }
}

module.exports = Throw