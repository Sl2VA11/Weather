const express = require("express");
const { authenticate } = require("../../middlewares");
const ctrl = require("../../controllers/weather");
const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", authenticate, ctrl.postWeather);

router.put("/:contactId", ctrl.putById);

router.put("/:contactId/favorite", ctrl.putFavorite);

module.exports = router;
