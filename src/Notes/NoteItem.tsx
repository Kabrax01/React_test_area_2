import { Note } from "./App";

interface NoteItemProps {
    noteContent: Note | undefined;
    handleDeleteNote: () => void;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
export function NoteItem({
    noteContent,
    handleDeleteNote,
    setEdit,
}: NoteItemProps) {
    if (!noteContent)
        noteContent = {
            id: 0,
            title: "Tutaj będzie tytuł",
            content: "Tutaj będzie tekst",
        };
    const { title, content } = noteContent;

    return (
        <div className="note">
            <div className="note-title">
                <p>{title}</p>
            </div>
            <div className="note-content">
                <p>{content}</p>
            </div>

            <div className="note_actions">
                <button onClick={() => setEdit((prev) => !prev)}>Edit</button>
                <button onClick={handleDeleteNote}>Delete</button>
            </div>
        </div>
    );
}
