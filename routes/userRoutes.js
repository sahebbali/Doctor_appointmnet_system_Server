const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

router.post("/getUserData", authMiddleware, authController);

// Apply Doctor
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//get alli Notification
router.post("/get-all-notification", authMiddleware, getAllNotificationController);

//delete all notification
router.post("/delete-all-notification", authMiddleware, deleteAllNotificationController);
module.exports = router;
