const express = require("express");
const router = express.Router();
const rolesController = require("../../modules/roles");

router.post("/", rolesController.create);
router.get("/", rolesController.getAll);
router.get("/:id", rolesController.getById);
router.put("/", rolesController.update);
router.delete("/:id", rolesController.deleteRole);

module.exports = router;
