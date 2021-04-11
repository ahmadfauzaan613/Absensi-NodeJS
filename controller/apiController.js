const Karyawan = require("../model/Karyawan");
const Hadir = require("../model/Hadir");
const Izin = require("../model/Izin");
const Cuti = require("../model/Cuti");

module.exports = {
  viewKaryawan: async (req, res) => {
    const data_Karyawan = await Karyawan.find().select(
      "_id id_karyawan nama_karyawan nama_karyawan posisi_karyawan phone_number"
    );

    res.status(200).json({ data_Karyawan });
  },

  viewLaporan: async (req, res) => {
    const laporan = await Karyawan.find()
      .select("_id id_karyawan nama_karyawan posisi_karyawan phone_number")
      .populate({ path: "idhadir", select: "_id absen_masuk" })
      .populate({ path: "idizin", select: "_id tanggal_izin alasan_izin" })
      .populate({ path: "idcuti", select: "_id tanggal_cuti alasan_cuti" });

    res.status(200).json({
      data_laporan: {
        laporan,
      },
    });
  },

  viewHadir: async (req, res) => {
    const data_hadir = await Hadir.find().select("_id absen_masuk").populate({
      path: "idKaryawan",
      select: "_id absen_masuk id_karyawan nama_karyawan posisi_karyawan",
    });
    res.status(200).json({ data_hadir });
  },

  viewIzin: async (req, res) => {
    const data_izin = await Izin.find()
      .select("_id tanggal_izin alasan_izin")
      .populate({
        path: "karyawanid",
        select: "_id absen_masuk id_karyawan nama_karyawan posisi_karyawan",
      });
    res.status(200).json({ data_izin });
  },

  viewCuti: async (req, res) => {
    const data_cuti = await Cuti.find()
      .select("_id tanggal_cuti alasan_cuti")
      .populate({
        path: "karyawanid",
        select: "_id absen_masuk id_karyawan nama_karyawan posisi_karyawan",
      });
    res.status(200).json({ data_cuti });
  },
};
