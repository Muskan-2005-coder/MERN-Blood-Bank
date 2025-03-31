const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controller/authController");
const authMiddelware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

router.get("/current-user", authMiddelware, currentUserController);

module.exports = router;