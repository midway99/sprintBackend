const express = require('express');
const router = express.Router();
const postsController = require('../controllers/PostController')

router.get('/posts/all', postsController.all);
router.post('/api/v1/posts/create/', postsController.store);
router.get('/api/v1/posts/:id/show', postsController.show);
router.put('/api/v1/posts/:id/update', postsController.update);
router.delete('/api/v1/posts/:id/remove', postsController.remove);

module.exports = router;