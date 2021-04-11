const router = require("express").Router();
const apiController = require("../controller/apiController");

// GET
router.get("/karyawan", apiController.viewKaryawan);
router.get("/laporan", apiController.viewLaporan);
router.get("/data_hadir", apiController.viewHadir);
router.get("/data_izin", apiController.viewIzin);
router.get("/data_cuti", apiController.viewCuti);

module.exports = router;
