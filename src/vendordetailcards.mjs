import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  address: String,
  products: Array,
  email: String,
});

export default mongoose.model("VendorDetailCards", schema);
