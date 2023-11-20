const mongoose = require('mongoose');

mongoose.connect('mongodb//127.0.0.1:27017/users',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log("Established"))
    .catch(err => console.log("Error"))