class ApplicationError extends Error {
    constructor(context, message, errorCode, stack) {
        super(message);
        this.name = `${context}_${ApplicationError.name}`;
        this.errorCode = errorCode;
        this.stack = stack;
    }
}


module.exports = ApplicationError