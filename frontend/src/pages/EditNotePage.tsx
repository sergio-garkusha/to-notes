import { useNavigate, useParams } from "react-router-dom";
import { useNote, updateNote } from "../api/notesAPI";
import NotesAdder from "../components/NotesAdder";

export default function NotePage() {
  const { id } = useParams();
  const { note, isLoading, isError } = useNote(id as string);
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading note</div>;

  const { _id, title, content } = note;

  const handleUpdateNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTitle = formData.get("title") as string;
    const newContent = formData.get("content") as string;

    if (newTitle !== title || newContent !== content) {
      updateNote(_id, { title: newTitle, content: newContent })
        .then(() => {
          // TODO: show success notification
        })
        .finally(() => {
          navigate("/notes/" + _id);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      navigate("/notes/" + _id);
    }
  };

  return (
    <NotesAdder
      initialTitle={title}
      initialContent={content}
      action={handleUpdateNote}
    />
  );
}
