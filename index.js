const app = require("./app");
const config = require("dotenv").config;

config();

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
