// app.js
require("./mongo.js")
const cors = require("cors");
const express = require("express");
const userRoutes = require("./src/routes/authRoutes.js");
const todoRoutes = require("./src/routes/todoRoutes.js")
// Create Express app
const app = express();
app.use(cors());
app.use(express.json());
// Define routes and middleware here...
app.use("/user",userRoutes)

// Start the server\
app.use("/todos",todoRoutes)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

