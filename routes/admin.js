const router = require("express").Router();
const adminController = require("../controller/adminController");

router.get("/dashboard", adminController.viewDashboard);

// EndPoint Karyawan
router.get("/view_karyawan", adminController.viewkaryawan);
router.post("/view_karyawan", adminController.addKaryawan);
router.put("/view_karyawan", adminController.editKaryawan);
router.delete("/view_karyawan/:id", adminController.deleteKaryawan);
// EndPoint Karyawan

// EndPoint Izin
router.get("/view_izin", adminController.viewIzin);
router.post("/view_izin", adminController.addIzin);
router.put("/view_izin", adminController.editIzin);
router.delete("/view_izin/:id", adminController.deleteIzin);
// EndPoint Izin
// EndPoint Hadir
router.get("/view_hadir", adminController.viewHadir);
router.post("/view_hadir", adminController.addHadir);
router.delete("/view_hadir/:id", adminController.deleteHadir);
// EndPoint Hadir

// EndPoint Cuti
router.get("/view_cuti", adminController.viewCuti);
router.post("/view_cuti", adminController.addCuti);
router.put("/view_cuti", adminController.editCuti);
router.delete("/view_cuti/:id", adminController.deleteCuti);
// EndPoint Cuti

router.get("/view_laporan", adminController.viewLaporan);

module.exports = router;
