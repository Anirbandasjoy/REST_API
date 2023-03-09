const express = require("express");
const { AllUsers, createUser, updateUser, deleteUser } = require("../controller/user.controller");
const router = express.Router();

router.get("/",AllUsers)
router.post("/",createUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)

module.exports = router;