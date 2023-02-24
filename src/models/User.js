const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    name: String,
    email: String,
    state: String,
    passwordHash: String,
    token: String
});

const modelName = 'User';

if( mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];
} else {
<<<<<<< HEAD
    module.export = mongoose.moddel(modelName, modelSchema);
=======
    module.exports = mongoose.model(modelName, modelSchema);
>>>>>>> 5a43d62c03f66c5669aa458cfb57e40169cf2870
}