const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const izinSchema = new mongoose.Schema({
  karyawanid: [
    {
      type: ObjectId,
      ref: "Karyawan",
    },
  ],
  tanggal_izin: {
    type: Date,
    require: true,
  },
  alasan_izin: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Izin", izinSchema);
