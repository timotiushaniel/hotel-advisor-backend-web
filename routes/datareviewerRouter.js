const express = require("express")
const router = express.Router()
const datareviewerController = require("../controller/backend/home/datareviewerController")

router.get("/", datareviewerController.index)

router.get("/create", datareviewerController.create)
router.post("/", datareviewerController.store)

router.get("/", datareviewerController.edit)
router.put("/", datareviewerController.update)

router.delete("/", datareviewerController.destroy)

module.exports = router
