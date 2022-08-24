const { readFile, writeFile } = require("fs/promises");

// criar ler e apagar a criação de um crédito

class userCreditRepository {
    constructor({ file }) {
        this.file = file;
    }

    // pegar os dados que já estão no json
    async readJson() {
        return JSON.parse(await readFile(this.file));
    }

    // inserir um novo dado
    async writeJson(data) {
        await writeFile(this.file, JSON.stringify(content));
    }


    async create(userCredit) {
        // pega todos os créditos que já estão registrados
        const dataCredits = await this.readJson();

        // adiciona um novo item no array
        dataCredits.push(userCredit);

        // insere o dado
        await this.writeJson(dataCredits);

        return content;
    }

    async find({ userId, type }) {
        const content = await this.readJson();

        const result = content.find(({ _id, creditType }) => {
            _id === userId && creditType === type
        })

        return result

    }

    async update(userCredit) {
        const dataCredits = await this.readJson();
        const updatedDataCredits = dataCredits.filter(({ _id, creditType }) => {
            !(_id === userCredit._id && creditType === userCredit.creditType)
        })

        updatedDataCredits.push(userCredit);

        await this.writeJson(updatedDataCredits);

        return updatedDataCredits;
    }
}
module.exports = userCreditRepository;