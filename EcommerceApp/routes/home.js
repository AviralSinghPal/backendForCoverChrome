const express = require("express");
const { dummy } = require("../controllers/dummyController");
const { home } = require("../controllers/homeController");

const router = express.Router();



router.route('/').get(home);
router.route('/dummy').get(dummy);

module.exports = router;                                                               