import { Note } from "./App";

interface NotesProps {
    notes: Note[] | null;
    setSelectedNote: React.Dispatch<React.SetStateAction<number | undefined>>;
    handleShowForm: React.MouseEventHandler<HTMLButtonElement>;
}

export function NoteList({
    notes,
    setSelectedNote,
    handleShowForm,
}: NotesProps) {
    return (
        <div className="note_list">
            <button className="note_list-button" onClick={handleShowForm}>
                Nowa notatka
            </button>

            <ul>
                {notes?.map((note) => {
                    return (
                        <li
                            onClick={() => setSelectedNote(note.id)}
                            key={note.id}>
                            {note.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
