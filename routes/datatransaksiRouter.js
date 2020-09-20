const express = require("express")
const router = express.Router()
const datatransaksiController = require("../controller/backend/home/datatransaksiController")

router.get("/", datatransaksiController.index)

router.get("/create", datatransaksiController.create)
router.post("/", datatransaksiController.store)

router.get("/:id/edit", datatransaksiController.edit)
router.put("/:id", datatransaksiController.update)

router.delete("/", datatransaksiController.destroy)

module.exports = router
