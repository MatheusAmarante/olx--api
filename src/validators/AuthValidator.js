const { checkSchema } = require('express-validator');


module.exports = {
    signup: checkSchema({
        name: {
            trim: true,
            isLength: {
                options: { min: 2}
            },
            errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'E-mail invalido'
        },
        password: {
            isLength: {
                options: { min: 2} //melhorar aqui para senha forte
            },
            errorMessage: 'Senha precisa ter pelomenos 2 caracteres'
        },
        state: { 
            notEmpty: true,
            errorMessage: 'Estado não preenchido'
        }
    })
};