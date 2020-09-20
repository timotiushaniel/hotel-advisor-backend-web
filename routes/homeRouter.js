const express = require("express")
const router = express.Router()
const homeController = require("../controller/backend/home/homeController")

router.get("/", homeController.index)

/*
router.get("/create", homeController.create)
router.post("/", homeController.store)

router.get("/", homeController.edit)
router.put("/", homeController.update)

router.delete("/", homeController.destroy)
*/

module.exports = router
