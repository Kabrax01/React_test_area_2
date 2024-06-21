interface Note {
    id: number;
    title: string;
    content: string;
}

const data: Note[] = [
    {
        id: 1,
        title: "Shopping List",
        content: "Milk, Bread, Butter, Eggs, Cheese",
    },
    {
        id: 2,
        title: "Meeting Notes",
        content: "Discuss project milestones, assign tasks, review deadlines",
    },
    {
        id: 3,
        title: "Workout Plan",
        content:
            "Monday: Chest and Triceps, Tuesday: Back and Biceps, Wednesday: Rest, Thursday: Legs and Shoulders, Friday: Cardio",
    },
    {
        id: 4,
        title: "Book List",
        content:
            "1984 by George Orwell, Brave New World by Aldous Huxley, The Great Gatsby by F. Scott Fitzgerald",
    },
    {
        id: 5,
        title: "Travel Itinerary",
        content:
            "Day 1: Arrive in Paris, visit Eiffel Tower, Day 2: Louvre Museum, Day 3: Day trip to Versailles",
    },
];

export default data;
