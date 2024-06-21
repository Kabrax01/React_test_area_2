import { useState } from "react";
import data from "./data";
import "./main.scss";

interface Note {
    id: number;
    title: string;
    content: string;
}

interface NotesProps {
    notes: Note[];
}

function App() {
    const [notes, setNotes] = useState<Note[]>(data);

    return (
        <main>
            <div className="notes">
                <div className="notes_title">
                    <h1>Notatnik</h1>
                </div>
                <div className="notes_container">
                    <NoteList notes={notes} />
                    <NoteItem />
                </div>
            </div>
        </main>
    );
}

function NoteList({ notes }: NotesProps) {
    return <div></div>;
}

function NoteItem() {}

export default App;
