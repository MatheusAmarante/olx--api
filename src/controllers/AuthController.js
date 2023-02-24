<<<<<<< HEAD
=======
const { validationResult, matchedData} = require('express-validator');

>>>>>>> 5a43d62c03f66c5669aa458cfb57e40169cf2870
module.exports = {
    signin: async (req, res) => {

    },
    signup: async (req, res) => {
<<<<<<< HEAD

=======
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error: errors.mapped()});
            return;
        }
        const data = matchedData(req);

        res.json({tudocerto: true, data});
>>>>>>> 5a43d62c03f66c5669aa458cfb57e40169cf2870
    }
};