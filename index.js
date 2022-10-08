const express = require("express");
const app = express();
const PORT = 5050;

//middleware//
app.use(express.json());
app.use("/api/user", require("./routes/user"));
app.use("/api/post", require("./routes/post"));

//routes//
app.get("/", (req, res) => {
  res.send("Working");
});

//run server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
