import express from "express";
import { 
    updateBeautician, 
    deleteBeautician, 
    getAllBeauticians, 
    getSingleBeautician } 
    from "../Controllers/beauticianController.js";

const router = express.Router()

router.get('/:id', getSingleBeautician)
router.get('/', getAllBeauticians)
router.put('/:id', updateBeautician)
router.delete('/:id', deleteBeautician)

export default router