
//adicionar as execeptions depois
class UserCreditService {
    constructor({ userCreditRepository }) {
        this.userCreditRepository = userCreditRepository;
    }

    async create(userCredit) {
        await this.userCreditRepository.create(userCredit);
    }

    async update(userCredit) {
        await this.userCreditRepository.update(userCredit);
    }

    async find(_id, creditType) {
        return await this.userCreditRepository.find({ userId: _id, type: creditType })
    }

    async getUserTotalCredit({ _id, creditType }) {
        if (!_id || !creditType) {
            return "User id and Type Of Credit must be provided";
        }

        const userTotalCredit = await this.find(_id, creditType);


        if (typeof userTotalCredit === 'undefined') {
            return `User _id: ${_id} dont exists or credit is null`;
        }

        return userTotalCredit.credit;
    }

    async consumeOneUserTotalCredit({ _id, creditType }) {

        let userTotalCredit = await this.getUserTotalCredit({ _id, creditType });

        if (userTotalCredit <= 0) return "Insuficient Credits";

        userTotalCredit -= 1;

        await this.update({ _id, creditType, credit: userTotalCredit });

        return userTotalCredit;
    }

    async addCredit({ _id, creditType, credit }) {
        if (!_id || !creditType || !credit) return "_id, creditType and credit must be provided";

        const userCredit = await this.find({ _id, creditType });
        if (typeof userCredit === undefined) {
            await this.create({ _id, creditType, credit });
            return credit;
        } else {
            let usertTotalCredit = await this.getUserTotalCredit({ _id, creditType });

            usertTotalCredit += credit;

            await this.update({ _id, creditType, credit: usertTotalCredit });

            return usertTotalCredit;
        }
    }
}
module.exports = UserCreditService;