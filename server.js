//require Express

const express = require("express");
const PORT = process.env.PORT || 3000;

//Creates the Express Server
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));


//Page routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
  console.log(`Server is listening port: ${PORT}`)
})