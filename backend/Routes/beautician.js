import express from "express";
import { 
    updateBeautician, 
    deleteBeautician, 
    getAllBeauticians, 
    getSingleBeautician } 
    from "../Controllers/beauticianController.js";

import  {authenticate, restrict} from '../auth/verifyToken.js';

const router = express.Router()

router.get('/:id', getSingleBeautician)
router.get('/', getAllBeauticians)
router.put('/:id', authenticate, restrict(["beautician"]), updateBeautician)
router.delete('/:id', authenticate, restrict(["beautician"]), deleteBeautician)

export default router