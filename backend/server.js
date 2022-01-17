//We are using server to define the port and make the server up and running all the logic comes from app file:
const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');


//Uncaugt Error
process.on('uncaughtException', err => {
    console.log(`Error : ${err}`);
    console.log('Shutting Down Server');
    server.close(() => { process.exit(1) });
})

//Importing Config.env file
dotenv.config({ path: './backend/config/config.env' });


//Calling Database Connection to run:
connectDatabase();


//Make the server un on port 3000:
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is Up and Running on port ${process.env.PORT}`);
});


//Unhandled Promise Rejection
process.on('unhandledRejection', err => {
    console.log(`Error : ${err}`)
    console.log('Shutting Down Server');
    server.close(() => { process.exit(1) });
})