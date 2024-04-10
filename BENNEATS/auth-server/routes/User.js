// import { registerController } from '../controller/User';
const { registerController } = require('../controller/User');

const express=require('express');

router=express.Router();

router.post("/register",registerController);

module.exports = router;

