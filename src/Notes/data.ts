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
    {
        id: 3,
        title: "Plan treningowy",
        content:
            "Poniedziałek: Klatka i tricepsy, Wtorek: Plecy i bicepsy, Środa: Odpoczynek, Czwartek: Nogi i ramiona, Piątek: Cardio",
    },
    {
        id: 4,
        title: "Lista książek",
        content:
            "1984 George'a Orwella, Nowy Wspaniały Świat Aldousa Huxleya, Wielki Gatsby F. Scotta Fitzgeralda",
    },
    {
        id: 5,
        title: "Plan podróży",
        content:
            "Dzień 1: Przyjazd do Paryża, wizyta przy Wieży Eiffla, Dzień 2: Muzeum Luwr, Dzień 3: Wycieczka do Wersalu",
    },
];

export default data;
