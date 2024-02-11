const config = require("./config/config.js");
const app = require("./app.js");
const PORT = config.port;

app.listen(PORT, () =>
  console.log(`Server is up and running on http://localhost:${PORT}`)
);