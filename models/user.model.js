const database = require('../database');
const type = require('../database/types');

const User = database.define('user', {
    user_id:{
        type: type.STRING
    },
    username:{
        type: type.STRING
    },
    password:{
        type: type.STRING
    },
},
{
    timestamps: true,
    createdAt: 'created_at',

});

module.exports = {
    create: (data) => User.create(data),
    update: (data, query) => User.update(data, { where: query }),
    find: (query) => User.find({ where: query }),
    delete: (query) => User.remove({ where: query }),
};
