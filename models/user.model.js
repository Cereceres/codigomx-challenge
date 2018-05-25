const { database } = require('../database');
const type = require('../database/types');

const User = database.define('user', {
    user_id:{
        required: true,
        type: type.STRING,
        unique: true
    },
    username:{
        required: true,
        type: type.STRING
    },
    password:{
        required: true,
        type: type.STRING
    },
},
{
    timestamps: true,
    createdAt: 'created_at',

});

module.exports = {
    create: (data) => {
        if (data.password) data.password = new Buffer(data.password).toString('base64');
        return User.create(data).then((res) => res.toJSON());
    },
    update: (data, query) => {
        if (data.password) data.password = new Buffer(data.password).toString('base64');
        return User.update(data, { where: query });
    },
    find: (query) => User.findAll({ where: query })
        .then((res) => {
            if (res.map) return res.map((result) => result && result.toJSON());

            return res.toJSON();
        }),
    delete: (query) => User.destroy({ where: query }),
};
