import React, { createContext } from "react";
import { useNotes } from "../api/notesAPI";
import { NoteType } from "../api/notesAPI";

interface NotesContextType {
  notes: NoteType[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: NotesContextType = {
  notes: [],
  isLoading: true,
  isError: false,
};

export const NotesContext = createContext<NotesContextType>(initialState);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { notes, isLoading, isError } = useNotes();
  return (
    <NotesContext.Provider value={{ notes, isLoading, isError }}>{children}</NotesContext.Provider>
  );
};
