const mongoose = require('mongoose');


//Setting up The connection
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true,  }).then((data) => {
        console.log(`MongoDB connected with ${data.connection.host}`);
    });
}
module.exports = connectDatabase;