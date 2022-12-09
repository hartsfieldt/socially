const router = require("express").Router();

const {
  getAllThoughts,
  createThought,
  getThoughtById,
  deleteThought,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:thoughtId").get(getThoughtById).delete(deleteThought);

module.exports = router;
