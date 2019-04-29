

const MONGO_PATH = process.env.MONGO_PATH || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;

<<<<<<< HEAD
// const mongoUrl = "mongodb://${MONGO_PATH}:${MONGO_PORT}/hello";
=======
const mongoUrl = "mongodb://${MONGO_PATH}:${MONGO_PORT}/hello";
>>>>>>> 44ef0980707a99570201d47b9823ad06fd4c9d71

// const mongoUrl = "mongodb://localhost/local";

exports.mongoUrl = mongoUrl;