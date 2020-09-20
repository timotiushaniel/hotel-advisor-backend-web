const express = require("express")
const router = express.Router()
const datakotaController = require("../controller/backend/home/datakotaController")

router.get("/", datakotaController.index)

router.get("/create", datakotaController.create)
router.post("/", datakotaController.store)

router.get("/edit", datakotaController.edit)
router.put("/", datakotaController.update)

router.delete("/", datakotaController.destroy)


module.exports = router
