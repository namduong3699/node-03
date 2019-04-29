

const MONGO_PATH = process.env.MONGO_PATH || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;

// const mongoUrl = "mongodb://${MONGO_PATH}:${MONGO_PORT}/hello";

const mongoUrl = "mongodb://localhost/local";

exports.mongoUrl = mongoUrl;