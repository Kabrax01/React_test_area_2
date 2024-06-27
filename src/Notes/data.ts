interface Note {
    id: number;
    title: string;
    content: string;
}

const data: Note[] = [
    {
        id: 1,
        title: "Lista zakupów",
        content: "Mleko, Chleb, Masło, Jajka, Ser",
    },
    {
        id: 2,
        title: "Notatki z spotkania",
        content:
            "Omówienie etapów projektu, przydział zadań, przegląd terminów",
    },
];

export default data;
