const express = require("express");
const ctrl = require(`../../controllers/auth`);
const { ctrlWrapper } = require("../../helpers");
const { auth, upload } = require("../../middlewares");

const router = express.Router();
//sign up
router.post("/signup", ctrlWrapper(ctrl.register));

//email sending
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

//resending email
router.post("/verify/", ctrlWrapper(ctrl.resendVerifyEmail));

//sign in
router.post("/login", ctrlWrapper(ctrl.login));

//current
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

//log out
router.get("/logout", auth, ctrlWrapper(ctrl.logout));

//update subscription
router.patch("/", auth, ctrlWrapper(ctrl.updateSubscription));

//avatars
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.setAvatar)
);

module.exports = router;
