const express = require("express");
const router = express.Router();
const {
  registerNewUser,
  login,
  isAuthenticated,
  getUsersData,
  updateOneUser,
  deleteOneUser,
  forgotPassword,
  resetPassword,
  forgot,
} = require("./controllers");

router.post("/register", registerNewUser);
router.post("/login", login);
router.get("/is-auth", isAuthenticated);
router.get("/get-users", getUsersData);
router.post("/reset-password", updateOneUser);
router.get("/delete", deleteOneUser);
router.post("/forgot-password", forgotPassword);
router.get("/forgot-password", forgot);
router.get("/reset-password/:id", resetPassword);
router.post("/reset-password/:id", updateOneUser);
// router.post("/reset-password/:id/:token", reset1);
//router.post("/reset-password", resetPassword);

// router.get("/reset-password", resetPassword);
// router.post("/reset-password", resetPassword);
// router.post("/forgot-pasword", forgotPassword);

module.exports = router;
