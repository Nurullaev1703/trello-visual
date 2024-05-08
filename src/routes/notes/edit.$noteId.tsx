import { createFileRoute } from "@tanstack/react-router";
import { NoteForm } from "../../pages/notes/NoteForm";
import { Typography } from "@mui/material";
import { $notes } from "../../pages/notes/store/NoteStore";
import { useUnit } from "effector-react";



export const Route = createFileRoute("/notes/edit/$noteId")({
    component: NotesFormRoute,
    staticData: {
        title: "Редактировать заметку",
    }
});

function NotesFormRoute(){
    const { noteId } = Route.useParams();

    const data = useUnit($notes);

    const note = data.find((item) => item.id === Number(noteId));

    if (!note) {
        return <Typography align={'center'}>{"Заметки не существует"}</Typography>
    }

    return <NoteForm note={note} />
}