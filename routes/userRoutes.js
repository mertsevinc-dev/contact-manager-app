const expres = require("express");
const router = expres.Router();
const validateTokenHandler = require("../middleware/validateTokenHandler");

const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
// router.route("/current").get(currentUser);
router.route("/current").get(validateTokenHandler, currentUser);

module.exports = router;
