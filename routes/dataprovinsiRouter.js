const express = require("express")
const router = express.Router()
const dataprovinsiController = require("../controller/backend/home/dataprovinsiController")

router.get("/", dataprovinsiController.index)

router.get("/create", dataprovinsiController.create)
router.post("/", dataprovinsiController.store)

router.get("/", dataprovinsiController.edit)
router.put("/", dataprovinsiController.update)

router.delete("/", dataprovinsiController.destroy)


module.exports = router
