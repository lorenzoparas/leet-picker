import { DifficultySelections } from "../../types/CommonTypes";

export type DifficultyChipProps = {
    selected: boolean;
    difficulty: string;
};

export type DifficultyChipsProps = {
    selectedDifficulties: DifficultySelections;
    setSelectedDifficulties: Function;
};
