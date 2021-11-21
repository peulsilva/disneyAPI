const express = require("express");
const setRoutes = require("./setRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");
const app = express();
const port = 1500;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const main = (app) => {
  setRoutes(app);
};

main(app);
