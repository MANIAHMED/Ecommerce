const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  updatePassword,
  updateProfile,
  getSingleUser,
  getAllUser,
  updateRole,
  deleteUser
} = require("../controller/userController");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");
const router = express.Router();

//Registration Route
router.route("/register").post(registerUser);
//Login Route
router.route("/login").post(loginUser);
//Logout User
router.route("/logout").post(logout);
//Get User Details
router.route("/me").get(isAuthenticatedUser, getUserDetails);
//Update User Password
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
//Update Password and Email
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRole("admin"), getAllUser);

router.route("/admin/user/:id").get(isAuthenticatedUser, authorizeRole("admin") , getSingleUser)
.put(isAuthenticatedUser, authorizeRole("admin"), updateRole)
.delete(isAuthenticatedUser,authorizeRole("admin"),deleteUser);


module.exports = router;
