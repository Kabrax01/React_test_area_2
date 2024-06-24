import { useState } from "react";
import { Note } from "./App";

interface NoteFormProps {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[] | []>>;
    handleShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedNote: React.Dispatch<React.SetStateAction<number | undefined>>;
}

function NewNoteForm({
    notes,
    setNotes,
    handleShowForm,
    setSelectedNote,
}: NoteFormProps) {
    const [title, setTitle] = useState<string | "">("");
    const [content, setContent] = useState<string | "">("");

    function handleAddNewNote(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newNote = { title: title, content: content, id: Date.now() };
        setNotes([...notes, newNote]);
        handleShowForm(false);
        setSelectedNote(newNote.id);
        console.log(notes);
    }

    return (
        <form className="note_form" onSubmit={(e) => handleAddNewNote(e)}>
            <div>
                <input
                    type="text"
                    className="note_form-title"
                    maxLength={30}
                    placeholder="Tytuł notatki"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    className="note_form-content"
                    placeholder="Twoja notatka"
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <button>Dodaj notatę</button>
        </form>
    );
}

export default NewNoteForm;
