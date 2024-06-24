import { useEffect, useState } from "react";
import data from "./data";
import "./main.scss";
import { NoteList } from "./NoteList";
import { NoteItem } from "./NoteItem";

export interface Note {
    id: number;
    title: string;
    content: string;
}

export interface NotesProps {
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

export default App;
