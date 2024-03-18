import express from 'express';
const router = express.Router();

import studentController from '../app/controllers/StudentController.js';

router.put('/update/:id', studentController.update);
router.delete('/delete/:id', studentController.delete);
router.post('/create', studentController.create);
router.get('/search/:id', studentController.search);
router.get('/', studentController.showAll);

export default router;
