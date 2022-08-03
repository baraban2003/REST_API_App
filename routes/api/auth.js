const express = require("express");
const ctrl = require(`../../controllers/auth`);
const { ctrlWrapper } = require("../../helpers");
const { auth } = require("../../middlewares");

const router = express.Router();
//sign up
router.post("/signup", ctrlWrapper(ctrl.register));
//sign in
router.post("/login", ctrlWrapper(ctrl.login));

//current
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

//log out
router.get("/logout", auth, ctrlWrapper(ctrl.logout));

//update subscription
router.patch("/", auth, ctrlWrapper(ctrl.updateSubscription));

module.exports = router;
