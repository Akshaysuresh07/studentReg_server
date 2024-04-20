
const express=require('express')
const router=new express.Router()
const userController=require('../controller/userController')





router.post('/register',userController.register)
router.get('/details',userController.displayUsers)
module.exports=router