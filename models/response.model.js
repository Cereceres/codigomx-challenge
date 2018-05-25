const { database } = require('../database');
const type = require('../database/types');

const Response = database.define('response', {
    post_id:{
        type: type.STRING,
        unique: true,
        required: true,
    },
    user_id: {
        required: true,
        type: type.STRING
    },
    response_id:{
        required: true,
        type: type.STRING
    },
    response_content:{
        required: true,
        type: type.STRING
    }
},
{
    timestamps: true,
    createdAt: 'created_at',

});

module.exports = {
    count: (query) => Response.count({ where: query }),
    create: (data) => Response.create(data).then((res) => res.toJSON()),
    update: (data, query) => Response.update(data, { where: query }),
    find: (query) => Response.findAll({ where: query })
        .then((res) => {
            if (res.map) return res.map((result) => result && result.toJSON());

            return res.toJSON();
        }),
    delete: (query) => Response.destroy({ where: query }),
};
