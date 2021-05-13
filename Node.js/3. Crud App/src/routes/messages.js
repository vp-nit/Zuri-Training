const express = require('express');
const router = express.Router();
const messageCtrl = require('../controllers/messageControllers')

router.get('/', messageCtrl.fetchAllMessages);

router.get('/:id', messageCtrl.fetchSingleMessage);

router.post('/', messageCtrl.createNewMessage);

router.patch('/:id', messageCtrl.updadeSingleMessage);

router.delete('/:id', messageCtrl.deleteSingleMessage);

module.exports = router;