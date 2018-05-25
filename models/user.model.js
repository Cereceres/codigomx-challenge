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
    create: (data) => User.create(data).then((res) => res.toJSON()),
    update: (data, query) => User.update(data, { where: query }),
    find: (query) => User.findAll({ where: query })
        .then((res) => {
            console.log('res ', res);
            if (res.map) return res.map((result) => result && result.toJSON());

            return res.toJSON();
        }),
    delete: (query) => User.destroy({ where: query }),
};
