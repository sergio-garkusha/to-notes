import mongoose from "mongoose";

export interface NoteType {
  id: string;
  title: string;
  content: string;
}

const noteSchema = new mongoose.Schema<NoteType>({
  title: { type: String, required: true },
  content: { type: String },
});

// Create the Note model
const Note = mongoose.model<NoteType>("Note", noteSchema);

export default Note;
