
export type LeetcodeQuestion = {
    name: string;
    questionUrl: string;
    difficulty: string;
    videoUrl: string;
    solutionUrl: string;
    category: string;
};

export type CategorySelections = {
    [category: string]: boolean;
};

export type DifficultySelections = {
    [difficulty: string]: boolean;
}
