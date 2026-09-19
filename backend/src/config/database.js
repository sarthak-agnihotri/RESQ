const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    console.log("========================================");
    console.log("       MONGODB CONNECTION");
    console.log("========================================");
    console.log("Status :", "CONNECTED");
    console.log("Host   :", connection.connection.host);
    console.log("DB     :", connection.connection.name);
    console.log("========================================");
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = connectDatabase;