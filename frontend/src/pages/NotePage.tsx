import { Form, useNavigate, useParams } from "react-router-dom";
import { useNote, deleteNote } from "../api/notesAPI";

export default function NotePage() {
  const { id } = useParams();
  const { note, isLoading, isError } = useNote(id as string);
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading note</div>;

  const { _id, title, content } = note;
  const handleDeleteNote = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!confirm("Are you sure you want to delete this note?")) {
      event.preventDefault();
    }

    deleteNote(_id);
    navigate("/");
  };

  return (
    <>
      {title && <h1>{title}</h1>}
      {content && <p>{content}</p>}
      <div style={{ display: "flex" }}>
        <Form action="edit">
          <button type="submit">Edit</button>
        </Form>
        <button
          onClick={handleDeleteNote}
          type="submit"
        >
          Delete
        </button>
      </div>
    </>
  );
}
