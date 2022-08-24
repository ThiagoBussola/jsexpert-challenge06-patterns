const CreditType = require("./creditTypeEnum")

class Database {
    //simular a conexão com o banco
    constructor({ connectionString }) {
        this.connectionString = connectionString
    }

    async sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }

    async connect() {
        await this.sleep(100)
        return this
    }

    async find(query) {
        await this.sleep(100)
        return [
            {
                _id: 1,
                creditType: CreditType.SMS,
                credit: 30
            },
            {
                _id: 1,
                creditType: CreditType.SMS,
                credit: 20
            },
            {
                _id: 2,
                creditType: CreditType.WHATSAPP,
                credit: 30
            },
            {
                _id: 2,
                creditType: CreditType.EMAIL,
                credit: 65
            },
        ]
    }

}

module.exports = Database