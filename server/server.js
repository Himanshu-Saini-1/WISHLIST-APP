const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/wishlists", require("./routes/wishlistRoutes"));

const PORT = process.env.Render_API || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
