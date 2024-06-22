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
    const [notes, setNotes] = useState<Note[] | null>(null);
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
        setSelectedNote(1);
        console.log(data);
    }, []);

    return (
        <main>
            <div className="notes">
                <div className="notes_title">
                    <h1>Notatnik</h1>
                </div>
                <div className="notes_container">
                    <NoteList notes={notes} setSelectedNote={setSelectedNote} />
                    <NoteItem noteContent={noteContent} />
                </div>
            </div>
        </main>
    );
}

function NoteList({ notes, setSelectedNote }: NotesProps) {
    return (
        <div>
            <div className="notes_title">
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

function NoteItem({ noteContent }: Note) {
    const { title } = noteContent;
    return (
        <div>
            Hello
            <p>{title}</p>
        </div>
    );
}

export default App;
