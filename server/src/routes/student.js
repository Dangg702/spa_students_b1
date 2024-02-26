const express = require('express');
const router = express.Router();

const studentController = require('../app/controllers/StudentController')

router.put('/update/:id', studentController.update);
router.delete('/delete/:id', studentController.delete);
router.post('/create', studentController.create);
router.get('/search/:id', studentController.search);
router.get('/', studentController.showAll);

module.exports = router;
