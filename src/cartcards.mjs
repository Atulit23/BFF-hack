import mongoose from "mongoose";

const schema = mongoose.Schema({
  email: String,
  product: String,
  price: String,
  vendorname: String,
  useraddress: String,
});

export default mongoose.model("cartcards", schema);
