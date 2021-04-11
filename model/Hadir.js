const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const hadirSchema = new mongoose.Schema({
  idKaryawan: [
    {
      type: ObjectId,
      ref: "Karyawan",
    },
  ],
  absen_masuk: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.model("Hadir", hadirSchema);
