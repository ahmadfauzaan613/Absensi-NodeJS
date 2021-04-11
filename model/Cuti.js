const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const cutiSchema = new mongoose.Schema({
  karyawanid: [
    {
      type: ObjectId,
      ref: "Karyawan",
    },
  ],
  tanggal_cuti: {
    type: Date,
    require: true,
  },
  alasan_cuti: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Cuti", cutiSchema);
