const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const karyawanSchema = new mongoose.Schema({
  id_karyawan: {
    type: Number,
    require: true,
  },
  nama_karyawan: {
    type: String,
    require: true,
  },
  posisi_karyawan: {
    type: String,
    require: true,
  },
  phone_number: {
    type: String,
    require: true,
  },
  idhadir: [
    {
      type: ObjectId,
      ref: "Hadir",
    },
  ],
  idizin: [
    {
      type: ObjectId,
      ref: "Izin",
    },
  ],
  idcuti: [
    {
      type: ObjectId,
      ref: "Cuti",
    },
  ],
});

module.exports = mongoose.model("Karyawan", karyawanSchema);
