const express = require("express")
const router = express.Router()
const datahotelController = require("../controller/backend/home/datahotelController")

router.get("/", datahotelController.index)

router.get("/create", datahotelController.create)
router.post("/", datahotelController.store)

router.get("/", datahotelController.edit)
router.put("/", datahotelController.update)

router.delete("/", datahotelController.destroy)

module.exports = router
