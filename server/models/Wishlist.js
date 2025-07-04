const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  addedBy: String,
  createdAt: { type: Date, default: Date.now },
});

const WishlistSchema = new mongoose.Schema({
  name: String,
  owner: String,
  sharedWith: [String], // mock
  products: [ProductSchema],
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
