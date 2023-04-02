import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  address: String,
  email: String,
});

export default mongoose.model("AdressCards", schema);
