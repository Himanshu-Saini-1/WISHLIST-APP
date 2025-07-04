const express = require("express");
const router = express.Router();
const Wishlist = require("../models/Wishlist");

router.post("/", async (req, res) => {
  try {
    const wishlist = new Wishlist(req.body);
    await wishlist.save();
    res.json(wishlist);
  } catch (err) {
    console.error("Error creating wishlist:", err.message);
    res
      .status(500)
      .json({ message: "Failed to create wishlist", error: err.message });
  }
});

router.get("/:userEmail", async (req, res) => {
  const wishlists = await Wishlist.find({
    $or: [
      { owner: req.params.userEmail },
      { sharedWith: req.params.userEmail },
    ],
  });
  res.json(wishlists);
});

router.put("/:id", async (req, res) => {
  const updated = await Wishlist.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Wishlist.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
