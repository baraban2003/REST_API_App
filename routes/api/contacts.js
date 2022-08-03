const express = require("express");
const ctrl = require("../../controllers/contacts");

const { auth } = require("../../middlewares");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", auth, ctrlWrapper(ctrl.getContactById));

router.post("/", auth, ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", auth, ctrlWrapper(ctrl.removeContact));

router.put("/:contactId", auth, ctrlWrapper(ctrl.updateContact));

router.patch("/:contactId/favorite", auth, ctrlWrapper(ctrl.favorite));

module.exports = router;
