import { NotesProps } from "./App";

export function NoteList({ notes, setSelectedNote }: NotesProps) {
    return (
        <div className="note_list">
            <button className="note_list-button">Nowa notatka</button>

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
