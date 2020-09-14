// getting environment variables
const dotenv = require('dotenv');
dotenv.config();

// mongo database URI
const mongoUri = "mongodb://guestbook:private1@ds123695.mlab.com:23695/guestbook";

const configObj = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

const dbStreamsHandler = {
  error: () => {
    console.log('> error ocurred from the database');
  },
  open: () => {
    console.log('> successfully opened the database');
  },
};

module.exports = { mongoUri, configObj, dbStreamsHandler };
