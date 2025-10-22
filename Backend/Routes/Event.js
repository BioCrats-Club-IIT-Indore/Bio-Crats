import express from "express";
import Event from "../models/Event.js";
import { authenticateAdmin } from "../middleware/auth.js";
import { uploadEventImages } from "../middleware/upload.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// GET all events (Public route)
router.get("/", async (req, res) => {
  try {
    const { status, category } = req.query;
    let query = {};

    if (status && status !== "all") {
      query.status = status === "upcoming" ? "Upcoming" : "Past Event";
    }

    if (category && category !== "all") {
      query.category = category;
    }

    const events = await Event.find(query).sort({ createdAt: -1 }).lean();

    // Transform events to include both _id and id, and extract URLs from images
    const transformedEvents = events.map((event) => ({
      ...event,
      id: event._id.toString(),
      _id: event._id.toString(),
      images: event.images.map((img) => (typeof img === "object" ? img.url : img)),
    }));

    res.json({ success: true, events: transformedEvents });
  } catch (error) {
    console.error("Get events error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET single event by ID (Public route)
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).lean();
    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    // Add id field and extract URLs from images
    const transformedEvent = {
      ...event,
      id: event._id.toString(),
      _id: event._id.toString(),
      images: event.images.map((img) => (typeof img === "object" ? img.url : img)),
    };

    res.json({ success: true, event: transformedEvent });
  } catch (error) {
    console.error("Get event error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// CREATE new event (Admin only)
router.post("/", authenticateAdmin, uploadEventImages.array("images", 10), async (req, res) => {
  try {
    const {
      title,
      description,
      fullDescription,
      status,
      date,
      location,
      participants,
      speaker,
      category,
    } = req.body;

    if (!title || !description || !date) {
      return res.status(400).json({
        success: false,
        message: "Title, description, and date are required",
      });
    }

    // Get Cloudinary URLs and public IDs
    const images = req.files.map((file) => ({
      url: file.path,
      publicId: file.filename,
    }));

    const event = new Event({
      title,
      description,
      fullDescription: fullDescription || "",
      status: status || "Upcoming",
      date,
      location: location || "",
      participants: participants || "",
      speaker: speaker || "",
      Speaker: speaker || "",
      category: category || "workshop",
      images,
      createdBy: req.user.userId,
    });

    await event.save();

    // Transform response
    const savedEvent = event.toObject();
    savedEvent.id = savedEvent._id.toString();
    savedEvent.images = savedEvent.images.map((img) => img.url);

    res.status(201).json({
      success: true,
      event: savedEvent,
      message: "Event created successfully",
    });
  } catch (error) {
    console.error("Create event error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// UPDATE event (Admin only)
router.put("/:id", authenticateAdmin, uploadEventImages.array("images", 10), async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    const {
      title,
      description,
      fullDescription,
      status,
      date,
      location,
      participants,
      speaker,
      category,
      existingImages,
    } = req.body;

    // Handle existing images
    let images = [];
    if (existingImages) {
      const existing = Array.isArray(existingImages)
        ? existingImages
        : [existingImages];
      // Keep existing images that are still in the list
      images = event.images.filter((img) =>
        existing.some((e) => (typeof img === "object" ? img.url === e : img === e))
      );
    }

    // Add new uploaded images
    if (req.files && req.files.length > 0) {
      const newImages = req.files.map((file) => ({
        url: file.path,
        publicId: file.filename,
      }));
      images = [...images, ...newImages];
    }

    // Update fields
    if (title) event.title = title;
    if (description) event.description = description;
    if (fullDescription !== undefined)
      event.fullDescription = fullDescription;
    if (status) event.status = status;
    if (date) event.date = date;
    if (location !== undefined) event.location = location;
    if (participants !== undefined) event.participants = participants;
    if (speaker !== undefined) {
      event.speaker = speaker;
      event.Speaker = speaker;
    }
    if (category) event.category = category;
    event.images = images;
    event.updatedAt = new Date();

    await event.save();

    // Transform response
    const updatedEvent = event.toObject();
    updatedEvent.id = updatedEvent._id.toString();
    updatedEvent.images = updatedEvent.images.map((img) =>
      typeof img === "object" ? img.url : img
    );

    res.json({
      success: true,
      event: updatedEvent,
      message: "Event updated successfully",
    });
  } catch (error) {
    console.error("Update event error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE event (Admin only)
router.delete("/:id", authenticateAdmin, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    // Delete images from Cloudinary
    if (event.images && event.images.length) {
      for (const img of event.images) {
        try {
          const publicId = typeof img === "object" ? img.publicId : img;
          await cloudinary.uploader.destroy(publicId);
        } catch (err) {
          console.error("Error deleting image from Cloudinary:", err);
        }
      }
    }

    await Event.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    console.error("Delete event error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;