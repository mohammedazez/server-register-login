const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// Import port, mongodb uri live dari folder config
const { MONGODB_URI_LIVE } = require("./config");
// Import config database
const { database } = require("./config");

//   import router
const indexRouter = require("./routes/index");
const registerRouter = require("./routes/register");
const mottoRouter = require("./routes/motto");
const app = express();

console.log("Mongodb uri live", MONGODB_URI_LIVE);
// console.log("dbmongo", database);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Import index router
app.use("/", indexRouter);
// untuk mengambil data register member
app.use("/register", registerRouter);
// untuk mengambil data motto
app.use("/motto", mottoRouter);

// Cek koneksi database.js dbmongo
if (database) {
  console.log(`Koneksi berhasil`);
} else {
  console.log("Koneksi database gagal");
}

module.exports = app;
