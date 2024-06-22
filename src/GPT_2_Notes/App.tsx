import { useEffect, useState } from "react";
import data from "./data";
import "./main.scss";

interface Note {
    id: number;
    title: string;
    content: string;
}

interface NotesProps {
    notes: Note[] | null;
    setSelectedNote: React.Dispatch<React.SetStateAction<number | undefined>>;
}

function App() {
    const [notes, setNotes] = useState<Note[] | []>([]);
    const [selectedNote, setSelectedNote] = useState<number | undefined>();
    const [noteContent, setNoteContent] = useState<Note | undefined>();

    useEffect(() => {
        if (notes && selectedNote !== null) {
            const selected = notes.find((note) => note.id === selectedNote);
            setNoteContent(selected);
        }
    }, [selectedNote, notes]);

    // function handleSelectNote(id: number) {
    //     setSelectedNote;
    // }

    useEffect(() => {
        setNotes(data);
        // setSelectedNote(1);
        console.log(data);
    }, []);

    return (
        <main>
            <div className="notepad">
                <div className="notepad_title-main">
                    <h1>Notatnik</h1>
                </div>
                <div className="notepad_container">
                    <NoteList notes={notes} setSelectedNote={setSelectedNote} />
                    <NoteItem noteContent={noteContent} />
                </div>
            </div>
        </main>
    );
}

function NoteList({ notes, setSelectedNote }: NotesProps) {
    return (
        <div className="note_list">
            <div className="notes_list-title">
                <button>Nowa notatka</button>
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
            <div className="notes_content"></div>
        </div>
    );
}

interface NoteItemProps {
    noteContent: Note | undefined;
}

function NoteItem({ noteContent }: NoteItemProps) {
    if (!noteContent)
        noteContent = { id: 0, title: "empty", content: "Add new note" };
    const { title, content } = noteContent;

    console.log(noteContent);
    return (
        <div className="note_item">
            {noteContent ? (
                <>
                    <p>{title}</p>
                    <p>{content}</p>
                </>
            ) : (
                <>
                    <p>NO note content</p>
                </>
            )}
        </div>
    );
}

export default App;
