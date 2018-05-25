const { database } = require('../database');
const type = require('../database/types');

const Post = database.define('post', {
    post_id:{
        type: type.STRING
    },
    user_id: {
        type: type.STRING
    },
    responses_count : {
        type: type.INTEGER
    },
    post_content:{
        type: type.STRING
    }
},
{
    timestamps: true,
    createdAt: 'created_at',

});

module.exports = {
    create: (data) => Post.create(data).then((res) => res.toJSON()),
    update: (data, query) => Post.update(data, { where: query }),
    find: (query) => Post.findAll({ where: query })
        .then((res) => {
            if (res.map) return res.map((result) => result && result.toJSON());

            return res.toJSON();
        }),
    delete: (query) => Post.destroy({ where: query }),
};
