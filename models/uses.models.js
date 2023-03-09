const { v4: uuidv4 } = require('uuid');
const users = [
    {
        id : uuidv4(),
        userName : "Anirban das joy",
        email : "joy600508@gmail.com"
    },
    {
        id : uuidv4(),
        userName : "joy das",
        email : "anirban123@gmail.com"
    },
]
module.exports = users