const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
// application
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

