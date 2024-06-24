import { useEffect, useState } from "react";
import data from "./data";
import "./main.scss";
import { NoteList } from "./NoteList";
import { NoteItem } from "./NoteItem";
import NewNoteForm from "./NewNoteForm";

export interface Note {
    id: number;
    title: string;
    content: string;
}

function App() {
    const [notes, setNotes] = useState<Note[] | []>([]);
    const [selectedNote, setSelectedNote] = useState<number | undefined>();
    const [noteContent, setNoteContent] = useState<Note | undefined>();
    const [showNewNoteForm, setShowNewNoteForm] = useState<boolean>(true);

    function handleShowForm() {
        setShowNewNoteForm((prev) => !prev);
    }

    useEffect(() => {
        if (notes && selectedNote !== null) {
            const selected = notes.find((note) => note.id === selectedNote);
            setNoteContent(selected);
        }
    }, [selectedNote, notes]);

    useEffect(() => {
        setNotes(data);
    }, []);

    return (
        <main>
            <div className="notepad">
                <div className="notepad_title-main">
                    <h1>Notatnik</h1>
                </div>
                <div className="notepad_container">
                    <NoteList
                        notes={notes}
                        setSelectedNote={setSelectedNote}
                        handleShowForm={handleShowForm}
                    />
                    {showNewNoteForm ? (
                        <NewNoteForm
                            notes={notes}
                            setNotes={setNotes}
                            handleShowForm={handleShowForm}
                            setSelectedNote={setSelectedNote}
                        />
                    ) : (
                        <NoteItem noteContent={noteContent} />
                    )}
                </div>
            </div>
        </main>
    );
}

export default App;
