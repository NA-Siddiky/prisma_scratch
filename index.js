const express = require("express");
const app = express()
const PORT = 5050;


//run server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
