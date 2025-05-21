import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Adoption', adoptionSchema);