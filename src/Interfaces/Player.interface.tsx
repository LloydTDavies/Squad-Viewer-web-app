export interface Player {
    name: string;
    team?: string;
    nationality: Nationality
}

export interface Nationality {
    name: string,
    icon: string
}
