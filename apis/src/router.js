const express = require("express");
const router = express.Router();
const {
  registerNewUser,
  login,
  isAuthenticated,
  getUsersData,
} = require("./controllers");

router.post("/register", registerNewUser);
router.post("/login", login);
router.get("/is-auth", isAuthenticated);
router.get("/get-users", getUsersData);

// router.get("/forgot-password", forgotPassword);
// router.get("/reset-password", resetPassword);
// router.post("/reset-password", resetPassword);
// router.post("/forgot-pasword", forgotPassword);

module.exports = router;
