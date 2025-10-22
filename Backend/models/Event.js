import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["Upcoming", "Past Event"],
    default: "Upcoming",
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "",
  },
  participants: {
    type: String,
    default: "",
  },
  speaker: {
    type: String,
    default: "",
  },
  Speaker: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    enum: ["workshop", "competition", "symposium", "seminar"],
    default: "workshop",
  },
  images: [
    {
      url: String,
      publicId: String,
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

eventSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id;
    return ret;
  },
});

export default mongoose.model("Event", eventSchema);