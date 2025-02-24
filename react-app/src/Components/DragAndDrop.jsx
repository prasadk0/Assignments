import { useState } from "react";
import Notes from "./Notes";

export default function DragAndDrop() {
    const [notes, setNotes] = useState([
        {
            id: 1,
            text: "Link in bio for my Frontend Interview Prep Course",
        },
        {
            id: 2,
            text: "Like this Video and Subscribe to Roadside Coder",
        },
    ]);

    const [note, setNote] = useState("");

    return (
        <div>
            <Notes notes={notes} setNotes={setNotes} />
        </div>
    );
}