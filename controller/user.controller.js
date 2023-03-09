let users = require("../models/uses.models")
const { v4: uuidv4 } = require('uuid');

//ALL USERS
const AllUsers = (req, res) => {
    res.status(200).json({users})
}
// CREATE USERS
const createUser = (req,res) =>{
   const user = {
    id : uuidv4(),
    userName : req.body.userName,
    email : req.body.email,
   }
   users.push(user);
   res.status(201).json(users)
}

// UPDATE USERS
 const updateUser = (req,res) => {
    const {userName,email} = req.body;
    const userId = req.params.id;

    users.filter((user) => user.id ===userId).map((selectUser) =>{
        selectUser.userName  = userName;
        selectUser.email = email;
    });

    res.status(202).json(users)
    
 }

 //DELETE USER
const deleteUser = (req,res) => {
    const userId = req.params.id;
    users = users.filter((user) => user.id !=userId);
    res.status(203).json(users)
}
 

module.exports = {AllUsers,createUser,updateUser,deleteUser}