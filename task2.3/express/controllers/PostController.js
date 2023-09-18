const {Post} = require('../models/Post')
const errorsHandler = require("../services/errorsHandler")
module.exports = {
    async all(req, res) {
        try {
            const posts = await Post.findAll({});

            return res.json(posts);
        } catch (e) {
            errorsHandler.handle(e, res);
        }
    },
    async show(req, res) {
        try {
            const post = await Post.findByPk(req.params.id);

            return res.json(post);
        } catch (e) {
            errorsHandler.handle(e, res);
        }
    },
    async store(req, res) {
        try {
            const data = req.body;

            await Post.create({
                title: data.title,
                body: data.body,
                author_id: data.author_id,
            });

            res.json({status: 'ok'});
        } catch (e) {
            errorsHandler.handle(e, res);
        }
    },
    async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;

            let item = await Post.findByPk(id);
            if (!item)
                res.json({status: 'error', message: 'Post not found'});

            for (let key in data) {
                if (item.dataValues.hasOwnProperty(key)) {
                    item[key] = data[key];
                }
            }

            await item.save();

            res.json({status: 'success', post: item})
        } catch (e) {
            errorsHandler.handle(e, res);
        }
    },
    async remove(req, res) {
        try {
            const post = await Post.findByPk(req.params.id);
            await post.destroy();

            res.json({status: 'ok'});
        } catch (e) {
            errorsHandler.handle(e, res);
        }
    }
}