import { useState } from "react";
import { Note } from "./App";

interface NoteFormProps {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[] | []>>;
    handleShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedNote: React.Dispatch<React.SetStateAction<number | undefined>>;
    selectedNote: number;
    edit: boolean;
}

function NewNoteForm({
    notes,
    setNotes,
    handleShowForm,
    setSelectedNote,
    selectedNote,
    edit,
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

    function handleEditNote(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <form
            className="note_form"
            onSubmit={edit ? handleAddNewNote : handleEditNote}>
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
            <button>{!edit ? "Dodaj notatę" : "Edytuj"}</button>
        </form>
    );
}

export default NewNoteForm;
