const router = require("express").Router();

const apiRoutes = require("./apiRoutes");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("404 not found!");
});

module.exports = router;
