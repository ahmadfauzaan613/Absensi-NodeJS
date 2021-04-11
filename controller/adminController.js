const Karyawan = require("../model/Karyawan");
const Hadir = require("../model/Hadir");
const Izin = require("../model/Izin");
const Cuti = require("../model/Cuti");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard");
  },

  // Karyawan
  viewkaryawan: async (req, res) => {
    const karyawan = await Karyawan.find();
    res.render("admin/Karyawan/view_karyawan", {
      karyawan,
    });
  },

  addKaryawan: async (req, res) => {
    try {
      const {
        id_karyawan,
        nama_karyawan,
        posisi_karyawan,
        phone_number,
      } = req.body;
      await Karyawan.create({
        id_karyawan,
        nama_karyawan,
        posisi_karyawan,
        phone_number,
      });
      res.redirect("/admin/view_karyawan");
    } catch (error) {
      res.redirect("/admin/view_karyawan");
    }
  },

  editKaryawan: async (req, res) => {
    const {
      id,
      id_karyawan,
      nama_karyawan,
      posisi_karyawan,
      phone_number,
    } = req.body;
    const karyawan = await Karyawan.findOne({ _id: id });
    karyawan.id_karyawan = id_karyawan;
    karyawan.nama_karyawan = nama_karyawan;
    karyawan.posisi_karyawan = posisi_karyawan;
    karyawan.phone_number = phone_number;
    await karyawan.save();
    res.redirect("/admin/view_karyawan");
  },

  deleteKaryawan: async (req, res) => {
    const { id } = req.params;
    const karyawan = await Karyawan.findOne({ _id: id });
    await karyawan.remove();
    res.redirect("/admin/view_karyawan");
  },
  // Karyawan

  // Hadir
  viewHadir: async (req, res) => {
    const hadir = await Hadir.find();
    const karyawan = await Karyawan.find();
    res.render("admin/Hadir/view_hadir", {
      karyawan,
      hadir,
    });
  },

  addHadir: async (req, res) => {
    const { idKaryawan, absen_masuk, absen_keluar } = req.body;
    const karyawan = await Karyawan.findOne({ _id: idKaryawan });
    const newHadir = {
      idKaryawan: karyawan._id,
      absen_masuk,
      absen_keluar,
    };
    const hadir = await Hadir.create(newHadir);
    karyawan.idhadir.push({ _id: hadir._id });
    await karyawan.save();
    res.redirect("/admin/view_hadir");
  },

  deleteHadir: async (req, res) => {
    const { id } = req.params;
    const hadir = await Hadir.findOne({ _id: id });
    await hadir.remove();
    res.redirect("/admin/view_hadir");
  },
  // Hadir

  // Izin
  viewIzin: async (req, res) => {
    const izin = await Izin.find();
    const karyawan = await Karyawan.find();
    res.render("admin/Izin/view_izin", {
      karyawan,
      izin,
    });
  },

  addIzin: async (req, res) => {
    const { karyawanid, tanggal_izin, alasan_izin } = req.body;
    const karyawan = await Karyawan.findOne({ _id: karyawanid });
    const newIzin = {
      karyawanid: karyawan._id,
      tanggal_izin,
      alasan_izin,
    };
    const izin = await Izin.create(newIzin);
    karyawan.idizin.push({ _id: izin._id });
    await karyawan.save();
    res.redirect("/admin/view_izin");
  },

  editIzin: async (req, res) => {
    const { id, tanggal_izin, alasan_izin } = req.body;
    const izin = await Izin.findOne({ _id: id });
    izin.tanggal_izin = tanggal_izin;
    izin.alasan_izin = alasan_izin;
    await izin.save();
    res.redirect("/admin/view_izin");
  },

  deleteIzin: async (req, res) => {
    const { id } = req.params;
    const izin = await Izin.findOne({ _id: id });
    await izin.remove();
    res.redirect("/admin/view_izin");
  },

  // Izin

  // Cuti
  viewCuti: async (req, res) => {
    const cuti = await Cuti.find();
    const karyawan = await Karyawan.find();
    res.render("admin/Cuti/view_cuti", {
      karyawan,
      cuti,
    });
  },

  addCuti: async (req, res) => {
    const { karyawanid, tanggal_cuti, alasan_cuti } = req.body;
    const karyawan = await Karyawan.findOne({ _id: karyawanid });
    const newCuti = {
      karyawanid: karyawan._id,
      tanggal_cuti,
      alasan_cuti,
    };
    const cuti = await Cuti.create(newCuti);
    karyawan.idcuti.push({ _id: cuti._id });
    await karyawan.save();
    res.redirect("/admin/view_cuti");
  },

  editCuti: async (req, res) => {
    const { id, alasan_cuti, tanggal_cuti } = req.body;
    const cuti = await Cuti.findOne({ _id: id });
    cuti.tanggal_cuti = tanggal_cuti;
    cuti.alasan_cuti = alasan_cuti;
    await cuti.save();
    res.redirect("/admin/view_cuti");
  },

  deleteCuti: async (req, res) => {
    const { id } = req.params;
    const cuti = await Cuti.findOne({ _id: id });
    await cuti.remove();
    res.redirect("/admin/view_cuti");
  },
  // Cuti

  viewLaporan: async (req, res) => {
    const karyawan = await Karyawan.find()
      .populate("idhadir")
      .populate("idizin")
      .populate("idcuti");
    res.render("admin/Laporan/view_laporan", {
      karyawan,
    });
  },
};
