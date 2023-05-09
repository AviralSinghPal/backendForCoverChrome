require('dotenv').config();
const app = require("./app");

const port = process.env.PORT;
// application
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

