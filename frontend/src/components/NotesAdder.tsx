import { useState } from "react";
import { createNote } from "../api/notesAPI";

import styled from "@emotion/styled";

export default function NotesAdder({
  initialTitle,
  initialContent,
  action,
}: {
  initialTitle?: string;
  initialContent?: string;
  action?: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const [input, setInput] = useState(initialTitle || "");
  const [textarea, setTextarea] = useState(initialContent || "");

  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    createNote({ title, content })
      .then(() => {
        // pass
        // TODO: show success notification
      })
      .finally(() => {
        setInput("");
        setTextarea("");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.name === "title") {
      setInput(e.target.value);
    } else if (e.target.name === "content") {
      setTextarea(e.target.value);
    }
  };

  return (
    <Form onSubmit={action || handleAddNote}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={input}
        onChange={handleChanges}
        style={{ padding: "10px" }}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={textarea}
        onChange={handleChanges}
        style={{ minHeight: "100px", padding: "10px" }}
      />
      <button
        type="submit"
        disabled={!input && !textarea}
        style={{ padding: "10px", cursor: "pointer" }}
      >
        {action ? "Update Note" : "Add Note"}
      </button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 480px;
`;
