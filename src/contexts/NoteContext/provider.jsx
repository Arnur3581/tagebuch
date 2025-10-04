import { NoteContext } from "./context";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const NoteContextProvider = () => {
	const [notes, setNotes] = useLocalStorage("notes", []);

	const addNote = (newNote) => {
		setNotes((prev) => [
			...prev,
			{ id: crypto.randomUUID(), createdAt: Date.now(), ...newNote },
		]);
	};

	const deleteNote = (id) => {
		setNotes((prev) => prev.filter((note) => note.id !== id));
	};

	const updateNote = (updatedNote) => {
		setNotes((prev) =>
			prev.map((note) =>
				note.id == updatedNote.id ? { ...note, ...updatedNote } : note
			)
		);
	};

	return (
		<NoteContext.Provider
			value={{ notes, addNote, deleteNote, updateNote }}
		></NoteContext.Provider>
	);
};
