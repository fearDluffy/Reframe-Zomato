//starting server
const app = require("./src/app");
const connectDB = require("./src/db/db");

//connecting to database
connectDB();

app.listen(4000, () => {
  console.log("server is running at port 4000");
});