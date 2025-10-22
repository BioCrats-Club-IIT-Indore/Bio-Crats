import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  files: [
    {
      filename: String,
      originalName: String,
      url: String,
      publicId: String,
      size: Number,
      mimetype: String,
      format: String,
    },
  ],
  author: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: String,
    email: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Blog", blogSchema);