require("dotenv").config();
module.exports = {
  PORT: process.env.PORT || 3000,
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
  DATABASE_URL: process.env.DATABASE_URL, // set on Render
};
