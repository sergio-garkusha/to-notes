import { Router, Request, Response } from "express";
import Note, { NoteType } from "../models/Note";

const router = Router();

// Create a new note
router.post("/", async (req: Request, res: Response) => {
  const { title, content }: NoteType = req.body;

  const note = new Note({ title, content });
  try {
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all notes
router.get("/", async (req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single note by ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a note by ID
router.put("/:id", async (req: Request, res: Response) => {
  const { title, content }: NoteType = req.body;
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a note by ID
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
