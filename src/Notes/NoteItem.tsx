import { Note } from "./App";

interface NoteItemProps {
    noteContent: Note | undefined;
}
export function NoteItem({ noteContent }: NoteItemProps) {
    if (!noteContent)
        noteContent = {
            id: 0,
            title: "Tutaj będzie tytuł",
            content: "Tutaj będzie treść notatki",
        };
    const { title, content } = noteContent;

    console.log(noteContent);
    return (
        <div className="note">
            <div className="note-title">
                <p>{title}</p>
            </div>
            <div className="note-content">
                <p>{content}</p>
            </div>

            <div className="note_actions">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
}
