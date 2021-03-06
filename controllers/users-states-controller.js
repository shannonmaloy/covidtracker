const UserStates = require('../models/User-States');

const userStatesController = {
    index(req, res, next) {
        UserStates.getAllByUserId(req.user.id)
        .then((userStates) => {
            res.json({
                selectedStates: userStates,
                stateTotals: res.locals.stateTotals,
                user: req.user,
                
            })

        })
        .catch(next);
    },
    create(req, res, next) {
        new UserStates({
            user_id: req.user.id,
            state_id: req.params.id
        })
        .save()
        .then(() => {
            res.json({
                message: 'User state successfully saved to profile!'
            })
        })
        .catch(next);
    },
    destroy(req, res, next) {
        UserStates.getByStateId(req.params.id, req.params.user_id)
        .then((userState) => {
            return userState.delete()
        })
        .then(() => {
            res.json({
                message: 'User state successfully deleted. Eat some pineapple pizza and relax.'
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ err, message: err.message});
        })
    }

}

module.exports = userStatesController;