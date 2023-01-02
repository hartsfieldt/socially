const router = require("express").Router();

const {
  getAllThoughts,
  createThought,
  getThoughtById,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .delete(deleteThought)
  .put(updateThought);

router.route("/:thoughtId/reactions").put(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
