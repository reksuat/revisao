import { Router } from "express";
import {
    store,
    index,
    update,
    destroy
} from '../controllers/userController.js';

const router = Router();

router.post('/', store);
router.get('/', index);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;